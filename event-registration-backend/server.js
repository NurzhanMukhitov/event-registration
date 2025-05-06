// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000; // Порт для сервера, Heroku сам подставит нужный

// Middleware
app.use(cors()); // Разрешаем CORS-запросы (пока для всех источников)
app.use(bodyParser.json()); // Для парсинга JSON-тел запросов
app.use(bodyParser.urlencoded({ extended: true })); // Для парсинга URL-encoded тел запросов

// Простой маршрут для проверки, что сервер работает
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Маршрут для регистрации
app.post('/api/register', (req, res) => {
  console.log('Получены данные с формы:', req.body); // Выводим полученные данные в консоль сервера

  const { f_1: firstName, f_2: lastName, email, phone } = req.body;

  // Базовая валидация (можно будет расширить)
  if (!firstName || !lastName || !email || !phone) {
    return res.status(400).json({ message: 'Все поля обязательны для заполнения.' });
  }

  // TODO: Здесь будет логика отправки email

  // Пока что просто возвращаем успешный ответ
  res.status(200).json({ message: 'Регистрация почти завершена! Скоро тут будет отправка email.' });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
}); 