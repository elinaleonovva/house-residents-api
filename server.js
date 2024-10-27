const express = require('express');
const mongoose = require('mongoose');
const residentsRouter = require('./routes/residents'); // Убедись, что путь к роуту правильный
require('dotenv').config(); // Подключение dotenv для работы с .env

const app = express(); // Инициализация приложения Express

// Middleware для парсинга JSON
app.use(express.json());

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI, { // Используй переменную окружения
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Подключение маршрутов
app.use('/api/residents', residentsRouter); // Убедись, что этот путь правильный

const PORT = process.env.PORT || 3000; // Render автоматически задаст PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
