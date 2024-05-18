import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './infosty.css';

function App() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    street: '',
    zipcode: '',
    customer_name: 'Founder2'
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
      navigate('/paymentF', { state: { formData: formData } });
      const response = await axios.post('http://localhost:3002/users', formData);
      console.log('Ответ сервера:', response.data);
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error.message);
    }
  };

  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bootstrap demo</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
      </head>
      <body class="page-top">
        <header class="header">
          <a class="logo" href="">
          ExpressEase
          </a>
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn">
            <span class="navicon"></span>
          </label>
          
        </header>

        <div class="allinone">
          <div class="background-123">
            <div class="inputGroup">
              <div class="mini-but-set">
                <div class="mini-but">
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    maxLength="255"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                    className={formSubmitted && !formData.first_name.trim() ? 'invalid' : ''}
                  />
                  <label htmlFor="first_name">Name</label>
                </div>
                <div class="mini-but">
                  <input
                    type="text"
                    id="last_name"
                    maxLength="255"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    className={formSubmitted && !formData.last_name.trim() ? 'invalid' : ''}
                  />
                  <label htmlFor="last_name">Surname</label>
                </div>
              </div>
            </div>
            <div class="inputGroup">
              <input
                type="text"
                name="email"
                maxLength="255"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="off"
                className={formSubmitted && !formData.email.trim() ? 'invalid' : ''}
              />
              <label htmlFor="email">Email</label>
            </div>

            <div class="inputGroup">
              <input
                type="text"
                name="phone"
                maxLength="15"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="off"
                className={formSubmitted && !formData.phone.trim() ? 'invalid' : ''}
              />
              <label htmlFor="phone">Phone number</label>
            </div>

            <div class="inputGroup">
              <input
                type="text"
                name="country"
                maxLength="255"
                id="country"
                value={formData.country}
                onChange={handleChange}
                required
                autoComplete="off"
                className={formSubmitted && !formData.country.trim() ? 'invalid' : ''}
              />
              <label htmlFor="country">Country</label>
            </div>

            <div class="inputGroup">
              <div class="mini-but-set">
                <div class="mini-but">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    maxLength="255"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    className={formSubmitted && !formData.city.trim() ? 'invalid' : ''}
                  />
                  <label htmlFor="city">City</label>
                </div>
                <div class="mini-but">
                  <input
                    type="text"
                    name="street"
                    maxLength="255"
                    value={formData.street}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    className={formSubmitted && !formData.street.trim() ? 'invalid' : ''}
                  />
                  <label htmlFor="street">Street</label>
                </div>
              </div>
            </div>

            <div class="inputGroup">
              <input
                type="text"
                name="zipcode"
                maxLength="255"
                value={formData.zipcode}
                onChange={handleChange}
                required
                autoComplete="off"
                className={formSubmitted && !formData.zipcode.trim() ? 'invalid' : ''}
              />
              <label htmlFor="zipcode">ZipCode</label>
            </div>
          </div>
        </div>
        <button type="submit" class="button-1" onClick={handleSubmit}>
          Submit
        </button>
      </body>
    </div>
  );
}

export default App;
