import React, { useState, useEffect  } from 'react';
import { useNavigate, useResolvedPath } from "react-router-dom";
import axios from 'axios';
import "./billsy.css"
import "./infosty.css"

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3002/getData');
      // Фильтрация данных
      const filteredData = response.data.filter(user => user.customer_name === "bublik" && user.boolean_field === true);
      setUserData(filteredData);
      console.log('Данные с сервера:', filteredData);
      console.log(userData)
    } catch (error) {
      console.error('Ошибка при получении данных с сервера:', error.message);
    }
  };

  const invoiceNumber = Math.floor(Math.random() * 100000);
  const getTodayDate = () => {
    const today = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return today.toLocaleDateString('en-US', options);
  };
  const getDueDate = () => {
    const today = new Date();
    const dueDate = new Date(today);
    dueDate.setDate(dueDate.getDate() + 7); // добавляем 7 дней
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return dueDate.toLocaleDateString('en-US', options);
  };
  const generateRandomNPWP = () => {
    const min = 1000000000000000; // минимальное 16-значное число
    const max = 9999999999999999; // максимальное 16-значное число
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomNames = ["Anna Müller", "Karl Schmidt", "Maria Fischer", "Hans Schneider", "Sophie Meyer"];
  const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
  
  return (
    <div>
        <html lang="en, id">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
      A Simple Invoice Template Responsive and clean with HTML CSS SCSS
    </title>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="assets/css/invoice.css" />
  </head>
  <body>
    <section class="wrapper-invoice">
      <div class="invoice">
        <div class="invoice-information">
          <p><b>Invoice #</b> : {invoiceNumber}</p>
          <p><b>Created Date </b>: {getTodayDate()} </p>
          <p><b>Due Date</b> : {getDueDate()}</p>
        </div>
        <div class="invoice-logo-brand">
          <h2>ExpressEase</h2>
          <img src="./assets/image/tampsh.png" alt="" />
        </div>
        <div class="invoice-head">
          <div class="head client-info">
            <p>ExpressEase, Inc.</p>
            <p>NPWP: {generateRandomNPWP()}</p>
            <p>{randomName}</p>
            <p>Schillerstraße 23, Berlin, Germany</p>
          </div>
          <div class="head client-data">
            <p>-</p>
            {userData.length > 0 ? (
                <div class="head client-data">
                  {userData.map((user) => (
                    <div key={user._id}>
                      <p>{user.first_name}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Загрузка...</p>
              )}
            {userData.length > 0 ? (
                <div class="head client-data">
                  {userData.map((user) => (
                    <div key={user._id}>
                      <p>{user.last_name} </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Загрузка...</p>
              )}
{userData.map((user) => (
                      <p key={user._id}> {user.city} {user.street}</p>
                    ))}          </div>
        </div>
        <div class="invoice-body">
          <table class="table">
            <thead>
              <tr>
                <th>Item Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Template Invoice</td>
                {userData.map((user) => (
                      <td key={user._id}>Eur. {user.amount}</td>
                    ))}
              </tr>
            </tbody>
          </table>
          <div class="flex-table">
            <div class="flex-column"></div>
            <div class="flex-column">
              <table class="table-subtotal">
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    {userData.map((user) => (
                      <td key={user._id}>Eur. {user.amount}</td>
                    ))}
                  </tr>
                
                  <tr>
                    <td>Credit</td>
                    {userData.map((user) => (
                      <td key={user._id}>Eur. {user.amount}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="invoice-total-amount">
          {userData.map((user) => (
                      <p key={user._id}>Eur. {user.amount}</p >
                    ))}
          </div>
        </div>
        <div class="invoice-footer">
          <p>Thank you, happy shopping again </p>
          <p>ExpressEaseTeam</p>
        </div>
      </div>
    </section>
      
  </body>
</html>
    </div>
  );
}

export default App;