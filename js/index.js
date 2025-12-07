var logined = true;
if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    
    // Инициализируем приложение
    tg.ready();
    tg.expand();

if (logined) {
  gmenu();
}

function gmenu() {
  if (tg.colorScheme == "dark") {
    var body = document.body;
    body.style.backgroundColor = "#1C1C1C";
    console.log("Темная тема активирована");

    // Добавляем стили для темной темы
    var style = document.createElement('style');
    style.textContent = `
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: 0;
        padding: 20px;
        min-height: 100vh;
      }

      #gmenu {
        max-width: 500px;
        margin: 0 auto;
      }

      img {
        width: 100%;
        max-width: 300px;
        display: block;
        margin: 20px auto;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      }

      form {
        background: rgba(255,255,255,0.05);
        padding: 25px;
        border-radius: 15px;
        border: 1px solid rgba(255,255,255,0.1);
      }

      .textDarkTheme {
        color: #e7e7e7;
        display: block;
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 16px;
      }

      input[type="text"] {
        width: 100%;
        padding: 12px 15px;
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 8px;
        color: #e7e7e7;
        font-size: 16px;
        margin-bottom: 20px;
        box-sizing: border-box;
      }

      input[type="text"]::placeholder {
        color: rgba(255,255,255,0.5);
      }

      input[type="submit"] {
        width: 100%;
        padding: 15px;
        background: linear-gradient(135deg, #8774e1, #6a5acd);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
      }

      input[type="submit"]:hover {
        background: linear-gradient(135deg, #6a5acd, #8774e1);
        transform: translateY(-2px);
      }

      @media (max-width: 480px) {
        body {
          padding: 15px;
        }
        form {
          padding: 20px;
        }
      }
    `;
    document.head.appendChild(style);

    ReactDOM.render(
      <div>
        <h1 style={{color: '#e7e7e7', textAlign: 'center', marginBottom: '10px'}}>ZOREX</h1>
        <p style={{color: '#888', textAlign: 'center', marginBottom: '30px'}}>Онлайн сервис для сервера MultiPunk</p>

        <img src="/img/LogoZOREX_dark.png" alt="ZOREXphoto"></img>

        <form action="" method="post">
          <label class="textDarkTheme" for="nickname">Введите ваш ник на MultiPunk:</label>
          <input id="nickname" type="text" placeholder="Steve" minLength="5" maxLength="24"></input>
          <input type="submit" value="Войти"></input>
        </form>
      </div>,
      document.getElementById("gmenu")
    );
  } else {
    var body = document.body;
    body.style.backgroundColor = "#f8f5f5";
    console.log("Белая тема активирована");

    // Добавляем стили для светлой темы
    var style = document.createElement('style');
    style.textContent = `
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: 0;
        padding: 20px;
        min-height: 100vh;
        background-color: #FFFAFA;
      }

      #gmenu {
        max-width: 500px;
        margin: 0 auto;
      }

      img {
        width: 100%;
        max-width: 300px;
        display: block;
        margin: 20px auto;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }

      form {
        background: rgba(0,0,0,0.03);
        padding: 25px;
        border-radius: 15px;
        border: 1px solid rgba(0,0,0,0.1);
      }

      .textLightTheme {
        color: #333333;
        display: block;
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 16px;
      }

      input[type="text"] {
        width: 100%;
        padding: 12px 15px;
        background: rgba(0,0,0,0.05);
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 8px;
        color: #333333;
        font-size: 16px;
        margin-bottom: 20px;
        box-sizing: border-box;
      }

      input[type="text"]::placeholder {
        color: rgba(0,0,0,0.4);
      }

      input[type="submit"] {
        width: 100%;
        padding: 15px;
        background: linear-gradient(135deg, #8774e1, #6a5acd);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
      }

      input[type="submit"]:hover {
        background: linear-gradient(135deg, #6a5acd, #8774e1);
        transform: translateY(-2px);
      }

      @media (max-width: 480px) {
        body {
          padding: 15px;
        }
        form {
          padding: 20px;
        }
      }
    `;
    document.head.appendChild(style);

    ReactDOM.render(
      <div>
        <h1 style={{color: '#333333', textAlign: 'center', marginBottom: '10px'}}>ZOREX</h1>
        <p style={{color: '#666666', textAlign: 'center', marginBottom: '30px'}}>Онлайн сервис для сервера MultiPunk</p>

        <img src="/img/LogoZOREX_light.png" alt="ZOREXphoto"></img>

        <form action="" method="post">
          <label class="textLightTheme" for="nickname">Введите ваш ник на MultiPunk:</label>
          <input id="nickname" type="text" placeholder="Steve" minLength="5" maxLength="24"></input>
          <input type="submit" value="Войти"></input>
        </form>
      </div>,
      document.getElementById("gmenu")
    );
  }
}
