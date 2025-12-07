var logined = true; // временно true для теста
var theme = "dark";

// Инициализация Telegram WebApp
function initTelegram() {
  if (window.Telegram && window.Telegram.WebApp) {
    try {
      const tg = window.Telegram.WebApp;
      
      // Инициализируем приложение
      tg.ready();
      tg.expand();
      
      // Получаем тему
      theme = tg.colorScheme || "dark";
      
      // Получаем информацию о пользователе
      const user = tg.initDataUnsafe?.user;
      if (user) {
        logined = true;
        console.log('Пользователь Telegram:', user.first_name);
      }
      
      // Обработчик изменения темы
      tg.onEvent('themeChanged', function() {
        theme = tg.colorScheme;
        console.log('Тема изменена на:', theme);
        renderApp();
      });
      
      // Обработчик закрытия
      tg.onEvent('viewportChanged', function() {
        if (tg.isExpanded) {
          tg.expand();
        }
      });
      
      return true;
    } catch (error) {
      console.error('Ошибка инициализации Telegram WebApp:', error);
      return false;
    }
  }
  return false;
}

// Функция для рендеринга меню
function GMenu() {
  const styles = theme === "dark" ? {
    bodyBg: "#1C1C1C",
    textColor: "#e7e7e7",
    secondaryText: "#888",
    bgColor: "rgba(255,255,255,0.05)",
    borderColor: "rgba(255,255,255,0.1)",
    inputBg: "rgba(255,255,255,0.1)",
    inputBorder: "rgba(255,255,255,0.2)",
    placeholder: "rgba(255,255,255,0.5)",
    logo: "/img/LogoZOREX_dark.png",
    shadow: "0 5px 15px rgba(0,0,0,0.3)"
  } : {
    bodyBg: "#f8f5f5",
    textColor: "#333333",
    secondaryText: "#666666",
    bgColor: "rgba(0,0,0,0.03)",
    borderColor: "rgba(0,0,0,0.1)",
    inputBg: "rgba(0,0,0,0.05)",
    inputBorder: "rgba(0,0,0,0.2)",
    placeholder: "rgba(0,0,0,0.4)",
    logo: "/img/LogoZOREX_light.png",
    shadow: "0 5px 15px rgba(0,0,0,0.1)"
  };

  // Динамически добавляем стили
  const styleId = 'theme-styles';
  let styleElement = document.getElementById(styleId);
  
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }
  
  styleElement.textContent = `
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 20px;
      min-height: 100vh;
      background-color: ${styles.bodyBg} !important;
      transition: background-color 0.3s ease;
    }

    #gmenu {
      max-width: 500px;
      margin: 0 auto;
    }

    .zorex-logo {
      width: 100%;
      max-width: 300px;
      display: block;
      margin: 20px auto;
      border-radius: 15px;
      box-shadow: ${styles.shadow};
    }

    .zorex-form {
      background: ${styles.bgColor};
      padding: 25px;
      border-radius: 15px;
      border: 1px solid ${styles.borderColor};
      transition: all 0.3s ease;
    }

    .zorex-label {
      color: ${styles.textColor};
      display: block;
      margin-bottom: 10px;
      font-weight: 500;
      font-size: 16px;
    }

    .zorex-input {
      width: 100%;
      padding: 12px 15px;
      background: ${styles.inputBg};
      border: 1px solid ${styles.inputBorder};
      border-radius: 8px;
      color: ${styles.textColor};
      font-size: 16px;
      margin-bottom: 20px;
      box-sizing: border-box;
      transition: all 0.3s;
    }

    .zorex-input::placeholder {
      color: ${styles.placeholder};
    }

    .zorex-input:focus {
      outline: none;
      border-color: #8774e1;
    }

    .zorex-submit {
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

    .zorex-submit:hover {
      background: linear-gradient(135deg, #6a5acd, #8774e1);
      transform: translateY(-2px);
    }

    .zorex-title {
      color: ${styles.textColor};
      text-align: center;
      margin-bottom: 10px;
      font-size: 2.5rem;
    }

    .zorex-subtitle {
      color: ${styles.secondaryText};
      text-align: center;
      margin-bottom: 30px;
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      body {
        padding: 15px;
      }
      .zorex-form {
        padding: 20px;
      }
    }
  `;

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    const nickname = document.getElementById('nickname')?.value;
    if (nickname && nickname.length >= 5 && nickname.length <= 24) {
      alert('Никнейм принят: ' + nickname);
      // Здесь можно добавить логику авторизации
    } else {
      alert('Введите никнейм от 5 до 24 символов');
    }
  };

  return (
    <div>
      <h1 className="zorex-title">ZOREX</h1>
      <p className="zorex-subtitle">Онлайн сервис для сервера MultiPunk</p>

      <img src={styles.logo} alt="ZOREX" className="zorex-logo" />

      <form className="zorex-form" onSubmit={handleSubmit}>
        <label className="zorex-label" htmlFor="nickname">
          Введите ваш ник на MultiPunk:
        </label>
        <input 
          id="nickname"
          type="text" 
          placeholder="Steve" 
          minLength="5" 
          maxLength="24"
          className="zorex-input"
          required
        />
        <button type="submit" className="zorex-submit">
          Войти
        </button>
      </form>
    </div>
  );
}

// Функция для логина
function LoginMenu() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px 20px',
      color: theme === 'dark' ? '#e7e7e7' : '#333'
    }}>
      <h2>Для продолжения войдите в систему</h2>
      <p>Используйте ваш Telegram аккаунт</p>
    </div>
  );
}

// Основная функция рендеринга
function renderApp() {
  const container = document.getElementById('gmenu');
  const loginContainer = document.getElementById('loginmenu');
  
  // Очищаем контейнеры
  container.innerHTML = '';
  loginContainer.innerHTML = '';
  
  // Применяем фоновый цвет
  document.body.style.backgroundColor = theme === "dark" ? "#1C1C1C" : "#f8f5f5";
  
  if (logined) {
    // Рендерим главное меню
    ReactDOM.render(<GMenu />, container);
  } else {
    // Рендерим меню логина
    ReactDOM.render(<LoginMenu />, loginContainer);
  }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
  // Инициализируем Telegram
  initTelegram();
  
  // Рендерим приложение
  renderApp();
  
  // Добавляем обработчик для демонстрации смены темы (для тестирования)
  window.testToggleTheme = function() {
    theme = theme === "dark" ? "light" : "dark";
    renderApp();
  };
});
