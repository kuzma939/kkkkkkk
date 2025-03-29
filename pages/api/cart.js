{/*import products from "./../../src/app/data/products";

let carts = {}; // Кожен sessionId матиме свою корзину

export default function handler(req, res) {
  const { method } = req;
  let sessionId = "";

  // GET — sessionId приходить в query, інші — в body
  if (method === "GET") {
    sessionId = req.query.sessionId;
  } else {
    sessionId = req.body.sessionId;
  }

  // Якщо sessionId не переданий
  if (!sessionId) {
    return res.status(400).json({ message: "Не вказано sessionId" });
  }

  // Ініціалізуємо корзину для сесії, якщо ще не існує
  if (!carts[sessionId]) {
    carts[sessionId] = [];
  }

  // === GET: Отримати корзину ===
  if (method === "GET") {
    const fullCart = carts[sessionId].map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return {
        ...item,
        name: product?.translations?.EN?.name,
        image: product?.image,
        price: product?.price,
      };
    });
    return res.status(200).json({ cart: fullCart });
  }

  // === POST: Додати товар ===
  if (method === "POST") {
    const { sessionId, productId, color, size, quantity = 1 } = req.body;
  
    if (!sessionId || !productId || !color || !size) {
      return res.status(400).json({ message: "Вкажіть всі обов'язкові поля: sessionId, productId, color, size" });
    }
  
    const existing = carts[sessionId].find(
      (item) =>
        item.productId === productId &&
        item.color === color &&
        item.size === size
    );
  
    if (existing) {
      existing.quantity += quantity;
    } else {
      carts[sessionId].push({
        id: Math.random().toString(36).substr(2, 9),
        productId,
        color,
        size,
        quantity,
      });
    }
  
    return res.status(200).json({ message: "Товар додано до корзини" });
  }
  
  {/*
    
  if (method === "POST") {
    const { productId, sessionId, color, size, quantity = 1 } = req.body;
  
    if (!productId || !sessionId) {
      return res.status(400).json({ message: "Невірні дані" });
    }
  
    const existing = carts[sessionId].find(
      (item) => item.productId === productId && item.color === color && item.size === size
    );
  
    if (existing) {
      existing.quantity += quantity;
    } else {
      carts[sessionId].push({
        id: Math.random().toString(36).substr(2, 9),
        productId,
        color,
        size,
        quantity,
      });
    }
  
    return res.status(200).json({ message: "Товар додано до корзини" });
  }
  if (method === "POST") {
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({ message: "Не вказано productId" });
    }

    const existing = carts[sessionId].find((item) => item.productId === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      carts[sessionId].push({
        id: Math.random().toString(36).substr(2, 9),
        productId,
        quantity: 1,
      });
    }

    return res.status(200).json({ message: "Товар додано до корзини" });
  }

  // === PUT: Оновити кількість ===
  if (method === "PUT") {
    const { cartId, quantity } = req.body;
    const item = carts[sessionId].find((item) => item.id === cartId);
    if (!item) return res.status(404).json({ message: "Товар не знайдено" });

    item.quantity = quantity;
    return res.status(200).json({ message: "Кількість оновлено" });
  }

  // === DELETE: Видалити товар ===
  if (method === "DELETE") {
    const { cartId } = req.body;
    carts[sessionId] = carts[sessionId].filter((item) => item.id !== cartId);
    return res.status(200).json({ message: "Товар видалено" });
  }

  // Якщо метод не підтримується
  res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
  return res.status(405).end(`Метод ${method} не підтримується`);
}
 */}