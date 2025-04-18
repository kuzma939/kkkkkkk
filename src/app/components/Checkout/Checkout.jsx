'use client';

import { useState, useEffect } from 'react';
import fetchGeoCities from '../../utils/fetchGeoCities'
import { validateForm } from '../../utils/validationContactForm';

export default function Checkout() {
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [cityQuery, setCityQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCityRef, setSelectedCityRef] = useState('');
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [total, setTotal] = useState(0);
  const [onlinePaymentMethod, setOnlinePaymentMethod] = useState('');

  const [errors, setErrors] = useState({});

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    const id = localStorage.getItem('sessionId');
    if (id) setSessionId(id);
  }, []);

  useEffect(() => {
    const amount = localStorage.getItem('totalAmount');
    if (amount) setTotal(Number(amount));
  }, []);

  const prepayAmount = (total * 0.1).toFixed(2);
  const BACKEND_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchNovaPoshtaCities = async (query) => {
    const apiKey = process.env.NEXT_PUBLIC_NP_API_KEY;
    try {
      const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey,
          modelName: 'Address',
          calledMethod: 'searchSettlements',
          methodProperties: { CityName: query, Limit: 10 }
        })
      });
      const data = await response.json();
      return data.data?.[0]?.Addresses || [];
    } catch (error) {
      console.error('Помилка при запиті до Нової Пошти:', error);
      return [];
    }
  };

  const fetchWarehouses = async (cityRef) => {
    const apiKey = process.env.NEXT_PUBLIC_NP_API_KEY;
    try {
      const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey,
          modelName: 'AddressGeneral',
          calledMethod: 'getWarehouses',
          methodProperties: { CityRef: cityRef, Limit: 50 }
        })
      });
      const data = await response.json();
      setWarehouses(data.data || []);
    } catch (error) {
      console.error('Помилка при отриманні відділень:', error);
    }
  };

  const handleCityInput = async (e) => {
    const value = e.target.value;
    setCityQuery(value);
    setSelectedCityRef('');
    setWarehouses([]);

    if (value.length < 2) {
      setFilteredCities([]);
      return;
    }

    let results = [];
    if (deliveryMethod === 'nova-poshta') {
      results = await fetchNovaPoshtaCities(value);
    } else if (deliveryMethod === 'ukr-poshta' || deliveryMethod === 'courier') {
      results = await fetchGeoCities(value, deliveryMethod);
    }
    setFilteredCities(results);
  };

  const handleCitySelect = (city) => {
    if (deliveryMethod === 'nova-poshta') {
      setCityQuery(city.Present);
      setFilteredCities([]);
      setSelectedCityRef(city.DeliveryCity);
      fetchWarehouses(city.DeliveryCity);
    } else {
      setCityQuery(city.display_name || city.name);
      setFilteredCities([]);
    }
  };

  const handleStripePayment = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/payments/stripe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: total,
          successUrl: `${window.location.origin}/success`,
          cancelUrl: `${window.location.origin}/checkout`,
        }),
      });
      const data = await response.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error('Stripe помилка:', err);
      alert('Не вдалося перейти до Stripe оплати');
    }
  };

  const handleLiqPayPayment = async (order) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/payments/liqpay`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: order.total,
          resultUrl: `${window.location.origin}/success`,
          serverUrl: `${BACKEND_URL}/api/payments/payment-callback`,
          order
        })
      });
      const html = await response.text();
      const container = document.createElement('div');
      container.innerHTML = html;
      document.body.appendChild(container);
      container.querySelector('form').submit();
    } catch (err) {
      console.error('LiqPay помилка:', err);
      alert('Не вдалося ініціювати LiqPay оплату');
    }
  };

  const saveOrder = async (order) => {
    const res = await fetch(`${BACKEND_URL}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    });

    if (!res.ok) throw new Error('Не вдалося зберегти замовлення');
    const saved = await res.json();
    console.log('✅ Замовлення збережено:', saved);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValues = { firstName, lastName, email, phone };
    const validationErrors = validateForm(formValues);
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); 
      return; 
    }
  
    setErrors({}); 
  
    const order = {
      firstName,
      lastName,
      patronymic,
      email,
      phone,
      deliveryMethod,
      city: cityQuery,
      warehouse: selectedWarehouse,
      comment,
      total,
      prepay: paymentType === 'prepay',
      paymentMethod: onlinePaymentMethod || 'cod',
      sessionId,
    };

    try {
      if (paymentType === 'full') {
        localStorage.setItem('pendingOrder', JSON.stringify(order));
        if (onlinePaymentMethod === 'stripe') {
          await handleStripePayment();
        } else if (onlinePaymentMethod === 'liqpay') {
          await handleLiqPayPayment(order);
        } else {
          alert('Будь ласка, оберіть метод онлайн-оплати');
        }
      } else {
        await saveOrder(order);
        alert('Замовлення оформлено! Очікуйте дзвінка 📞');
      }
    } catch (error) {
      console.error('❌ Помилка при обробці замовлення:', error);
      alert('Не вдалося обробити замовлення. Спробуйте ще раз.');
    }
  };
 
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Оформлення замовлення</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
  
        {/* Імʼя, Прізвище, По батькові */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-2 border rounded w-full"
              placeholder="Імʼя"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
  
          <div>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-2 border rounded w-full"
              placeholder="Прізвище"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
  
          <div>
            <input
              value={patronymic}
              onChange={(e) => setPatronymic(e.target.value)}
              className="p-2 border rounded w-full"
              placeholder="По батькові"
            />
          </div>
        </div>
  
        {/* Email */}
        <div className="mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border rounded bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
  
        {/* Телефон */}
        <div className="mt-4">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Телефон"
            className="w-full p-2 border rounded bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
  
        {/* Спосіб доставки */}
        <div>
          <label className="block mb-1 font-medium">
            Спосіб доставки
          </label>
          <select
            value={deliveryMethod}
            onChange={(e) => setDeliveryMethod(e.target.value)}
            className="w-full p-2 border rounded bg-white dark:bg-black text-black dark:text-white"
            required
          >
            <option value="">Оберіть спосіб</option>
            <option value="nova-poshta">Нова Пошта</option>
            <option value="ukr-poshta">Укрпошта</option>
            <option value="courier">Курʼєром</option>
          </select>
        </div>
  
        {/* Місто + Відділення */}
        {deliveryMethod === 'nova-poshta' && (
          <>
            <div>
              <label className="block mb-1 font-medium">Населений пункт</label>
              <input
                type="text"
                value={cityQuery}
                onChange={handleCityInput}
                placeholder="Почніть вводити назву"
                className="w-full p-2 border rounded"
              />
              {filteredCities.length > 0 && (
                <ul className="mt-2 border rounded shadow bg-white max-h-40 overflow-auto z-10 relative">
                  {filteredCities.map((city, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleCitySelect(city)}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {city.Present}
                    </li>
                  ))}
                </ul>
              )}
            </div>
  
            {warehouses.length > 0 && (
              <div>
                <label className="block mb-1 font-medium">Відділення</label>
                <select
                  className="w-full p-2 border rounded"
                  value={selectedWarehouse}
                  onChange={(e) => setSelectedWarehouse(e.target.value)}
                >
                  <option value="">Оберіть відділення</option>
                  {warehouses.map((wh) => (
                    <option key={wh.Ref} value={wh.Ref}>
                      {wh.Description}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </>
        )}
  
        {(deliveryMethod === 'ukr-poshta' || deliveryMethod === 'courier') && (
          <div>
            <label className="block mb-1 font-medium">Населений пункт</label>
            <input
              type="text"
              value={cityQuery}
              onChange={handleCityInput}
              placeholder="Почніть вводити назву"
              className="w-full p-2 border rounded"
            />
            {filteredCities.length > 0 && (
              <ul className="mt-2 border rounded shadow bg-white max-h-40 overflow-auto z-10 relative">
                {filteredCities.map((city, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleCitySelect(city)}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {city.display_name || city.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
  
        {/* Коментар */}
        <textarea
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Коментар до замовлення"
          className="w-full p-2 border rounded"
        />
  
        {/* Оплата */}
        <div>
          <label className="block mb-1 font-medium">Оплата</label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="full"
                checked={paymentType === 'full'}
                onChange={() => {
                  setPaymentType('full');
                  setOnlinePaymentMethod('');
                }}
              />
              <span>Оплата онлайн (повна сума: {total} грн)</span>
            </label>
          </div>
        </div>
  
        {paymentType === 'full' && (
          <div className="bg-gray-50 p-4 rounded border">
            <label className="block mb-2 font-medium">Спосіб онлайн-оплати</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="online-method"
                  value="liqpay"
                  checked={onlinePaymentMethod === 'liqpay'}
                  onChange={() => setOnlinePaymentMethod('liqpay')}
                />
                <span>LiqPay (🇺🇦 грн)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="online-method"
                  value="stripe"
                  checked={onlinePaymentMethod === 'stripe'}
                  onChange={() => setOnlinePaymentMethod('stripe')}
                />
                <span>Stripe (🌍 USD / EUR)</span>
              </label>
            </div>
          </div>
        )}
  
        {/* Кнопка */}
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={!paymentType}
        >
          Оплатити замовлення
        </button>
      </form>
    </div>
  );
}  