import nodemailer from "nodemailer";
import { escape } from "lodash-es"; // Use lodash-es instead of lodash for better support

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  
  const {
    firstName,
    lastName,
    email,
    phone,
    message,
    productName,
    productDescription,
    productPrice,
    productColor,
    productQuantity,
    productSize,
    productSKU,
    productImage,
  } = req.body;

  console.log("Отримані дані:", req.body);

  // Ensure that required fields have valid data
  const safeFirstName = escape(firstName || "Клієнт");
  const safeLastName = escape(lastName || "");
  const safeEmail = escape(email || "невідомо");
  const safePhone = escape(phone || "Не вказано");
  const safeMessage = escape(message || "Немає повідомлення");
  const safeProductName = escape(productName || "Без назви");
  const safeProductDescription = escape(productDescription || "Опис відсутній");
  const safeProductPrice = escape(productPrice || "Не вказано");
  const safeProductColor = escape(productColor || "Не вказано");
  const safeProductQuantity = escape(productQuantity || 1);
  const safeProductSize = escape(productSize || "Не вказано");
  const safeProductSKU = escape(productSKU || "N/A");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: { rejectUnauthorized: false }
  });

  try {
    // Email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "latoreatelier01@gmail.com", // Administrator email
      subject: "New Contact Form Submission",
      html: `
        <!DOCTYPE html>
        <html lang="uk">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              padding: 16px;
              color: #333;
            }
            img {
              max-width: 300px;
              border-radius: 8px;
            }
            .highlight {
              font-weight: bold;
              color: #4caf50;
            }
            .details-list {
              list-style: none;
              padding: 0;
            }
            .details-list li {
              margin-bottom: 8px;
            }
          </style>
        </head>
        <body>
          <h2>Новий запит від <span class="highlight">${safeFirstName} ${safeLastName}</span></h2>
          <p><strong>Телефон:</strong> ${safePhone}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Повідомлення:</strong> ${safeMessage}</p>
          <hr />
          <h3>Деталі продукту:</h3>
          <ul class="details-list">
            <li><strong>Назва:</strong> ${safeProductName}</li>
            <li><strong>Опис:</strong> ${safeProductDescription}</li>
            <li><strong>Ціна:</strong> ${safeProductPrice}</li>
            <li><strong>Колір:</strong> ${safeProductColor}</li>
            <li><strong>Розмір:</strong> ${safeProductSize}</li>
            <li><strong>Кількість:</strong> ${safeProductQuantity}</li>
            <li><strong>SKU:</strong> ${safeProductSKU}</li>
            ${productImage ? `<li><strong>Фото продукту:</strong><br /><img src="${escape(productImage)}" alt="Фото продукту" /></li>` : "<li>Фото відсутнє</li>"}
          </ul>
        </body>
        </html>
      `,
    });

    // Email to client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: safeEmail, // Client email
      subject: "Ваше замовлення отримано!",
      html: `
        <!DOCTYPE html>
        <html lang="uk">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              padding: 16px;
              color: #333;
            }
            img {
              max-width: 300px;
              border-radius: 8px;
            }
            .highlight {
              font-weight: bold;
              color: #4caf50;
            }
            .details-list {
              list-style: none;
              padding: 0;
            }
            .details-list li {
              margin-bottom: 8px;
            }
          </style>
        </head>
        <body>
          <h2>Доброго дня, <span class="highlight">${safeFirstName} ${safeLastName}!</span></h2>
          <p>Ваше замовлення отримано! Дякуємо за звернення.</p>
          <p>Ось деталі вашого запиту:</p>
          <hr />
          <h3>Деталі продукту:</h3>
          <ul class="details-list">
            <li><strong>Назва:</strong> ${safeProductName}</li>
            <li><strong>Опис:</strong> ${safeProductDescription}</li>
            <li><strong>Ціна:</strong> ${safeProductPrice}</li>
            <li><strong>Колір:</strong> ${safeProductColor}</li>
            <li><strong>Розмір:</strong> ${safeProductSize}</li>
            <li><strong>Кількість:</strong> ${safeProductQuantity}</li>
            <li><strong>SKU:</strong> ${safeProductSKU}</li>
            ${productImage ? `<li><strong>Фото продукту:</strong><br /><img src="${escape(productImage)}" alt="Фото продукту" /></li>` : "<li>Фото відсутнє</li>"}
          </ul>
          <hr />
          <p>Наш менеджер зв'яжеться з вами найближчим часом!</p>
          <p>З повагою, команда Latore Atelier.</p>
        </body>
        </html>
      `,
    });

    res.status(200).json({ success: true, message: "Email sent to admin and client!" });
  } catch (error) {
    console.error("Помилка:", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
}
