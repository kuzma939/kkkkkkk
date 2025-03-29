{/*'use client';

import { useState, useEffect } from 'react';


// Отримати або створити sessionId
function getSessionId() {
  let id = localStorage.getItem('sessionId');
  if (!id) {
    id = '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('sessionId', id);
  }
  return id;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');

  // 1. Ініціалізація sessionId
  useEffect(() => {
    setSessionId(getSessionId());
  }, []);

  // 2. Завантажити корзину
  useEffect(() => {
    if (!sessionId) return;

    const fetchCart = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/cart?sessionId=${sessionId}`);
        const data = await res.json();
        setCartItems(data.cart);
      } catch (error) {
        setMessage('Помилка при завантаженні корзини');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [sessionId]);

  // 3. Оновити кількість
  const updateQuantity = async (cartId, quantity) => {
    if (quantity < 1) return;
    setLoading(true);
    try {
      const res = await fetch('/api/cart', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartId, quantity, sessionId }),
      });
      const data = await res.json();
      setCartItems((prev) =>
        prev.map((item) => (item.id === cartId ? { ...item, quantity } : item))
      );
      setMessage(data.message);
    } catch {
      setMessage('Помилка при оновленні товару');
    } finally {
      setLoading(false);
    }
  };

  // 4. Видалити товар
  const removeItem = async (cartId) => {
    setLoading(true);
    try {
      const res = await fetch('/api/cart', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartId, sessionId }),
      });
      const data = await res.json();
      setCartItems((prev) => prev.filter((item) => item.id !== cartId));
      setMessage(data.message);
    } catch {
      setMessage('Помилка при видаленні товару');
    } finally {
      setLoading(false);
    }
  };

  // 5. Порахувати суму
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Корзина</h1>

      {message && <p className="mb-2 text-green-600">{message}</p>}
      {loading && <p>Завантаження...</p>}
      {!loading && cartItems.length === 0 && <p>Корзина порожня.</p>}

      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center py-3 border-b">
          <div className="flex items-center space-x-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded object-cover"
            />
            <div>
              <p className="font-medium">{item.name}</p>
              <p>{item.price} грн</p>
              <p className="text-sm text-gray-600">Колір: {item.color}</p>
              <p className="text-sm text-gray-600">Розмір: {item.size}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              aria-label="Зменшити кількість"
              disabled={item.quantity <= 1}
            >
              −
            </button>

            <span className="w-8 text-center">{item.quantity}</span>

            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              aria-label="Збільшити кількість"
            >
              +
            </button>
   
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 text-xl ml-2"
              aria-label="Видалити товар"
            >
              ✕
            </button> 
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div className="mt-6 text-right">
          <h2 className="text-xl font-bold">Всього: {total} грн</h2>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Оформити замовлення
          </button>
        </div>
      )}
    </div>
  );
}
*/}
{/*
Для підключення бекенду потрібно змінити і додати 
const BACKEND_URL = "https://shoopingsite-backend.onrender.com"; // ← заміни на свій реальний URL

// 2. Завантажити корзину
useEffect(() => {
  if (!sessionId) return;

  const fetchCart = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/cart?sessionId=${sessionId}`);
      const data = await res.json();
      setCartItems(data.cart);
    } catch (error) {
      setMessage('Помилка при завантаженні корзини');
    } finally {
      setLoading(false);
    }
  };

  fetchCart();
}, [sessionId]);

// 3. Оновити кількість
const updateQuantity = async (cartId, quantity) => {
  if (quantity < 1) return;
  setLoading(true);
  try {
    const res = await fetch(`${BACKEND_URL}/api/cart`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartId, quantity, sessionId }),
    });
    const data = await res.json();
    setCartItems((prev) =>
      prev.map((item) => (item.id === cartId ? { ...item, quantity } : item))
    );
    setMessage(data.message);
  } catch {
    setMessage('Помилка при оновленні товару');
  } finally {
    setLoading(false);
  }
};

// 4. Видалити товар
const removeItem = async (cartId) => {
  setLoading(true);
  try {
    const res = await fetch(`${BACKEND_URL}/api/cart`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartId, sessionId }),
    });
    const data = await res.json();
    setCartItems((prev) => prev.filter((item) => item.id !== cartId));
    setMessage(data.message);
  } catch {
    setMessage('Помилка при видаленні товару');
  } finally {
    setLoading(false);
  }
};
*/}