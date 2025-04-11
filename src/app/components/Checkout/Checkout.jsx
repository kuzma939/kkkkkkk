'use client';

import { useState, useEffect } from 'react';

const cities = [
  "Ужгород", "Умань", "Устилуг", "Івано-Франківськ", "Київ", "Львів", "Харків", "Одеса"
];

export default function Checkout() {
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [cityQuery, setCityQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [paymentType, setPaymentType] = useState('');
  const [total, setTotal] = useState(0); // 🔹 динамічна сума

  useEffect(() => {
    const amount = localStorage.getItem('totalAmount');
    if (amount) {
      setTotal(Number(amount));
    }
  }, []);

  const prepayAmount = (total * 0.1).toFixed(2);

  const handleCityInput = (e) => {
    const value = e.target.value;
    setCityQuery(value);

    const matches = cities.filter((city) =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredCities(matches);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Оформлення замовлення</h1>

      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">Імʼя</label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Прізвище</label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">По батькові</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block mb-1 font-medium">Телефон</label>
          <input type="tel" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block mb-1 font-medium">Спосіб доставки</label>
          <select
            value={deliveryMethod}
            onChange={(e) => setDeliveryMethod(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Оберіть спосіб</option>
            <option value="nova-poshta">Нова Пошта</option>
            <option value="ukr-poshta">Укрпошта</option>
            <option value="courier">Курʼєром</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Населений пункт</label>
          <input
            type="text"
            value={cityQuery}
            onChange={handleCityInput}
            placeholder="Почніть вводити назву міста"
            className="w-full p-2 border rounded"
          />
          {filteredCities.length > 0 && (
            <ul className="mt-2 border rounded shadow bg-white">
              {filteredCities.map((city, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    setCityQuery(city);
                    setFilteredCities([]);
                  }}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Коментар</label>
          <textarea
            rows={4}
            placeholder="Коментар до замовлення"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Оплата</label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="full"
                checked={paymentType === 'full'}
                onChange={() => setPaymentType('full')}
              />
              <span>Оплата онлайн (повна сума: {total} грн)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="prepay"
                checked={paymentType === 'prepay'}
                onChange={() => setPaymentType('prepay')}
              />
              <span>Передплата 10% ({prepayAmount} грн), решта — при отриманні</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={!paymentType}
        >
          Надіслати замовлення
        </button>
      </form>
    </div>
  );
}
