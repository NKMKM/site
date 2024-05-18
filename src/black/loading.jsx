import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./loading.css"

function App() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/billB'); // Замените на нужный вам путь
  }, 15000); // 30 секунд в миллисекундах

    return(
    <div class="aboba">
        <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Bootstrap demo</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
    </head>
        <link rel="stylesheet" type="text/css" href="loading.css" />
        <div class="spinner"></div>
    </div>
    );
}
export default App;


