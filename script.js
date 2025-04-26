   function loadScript(scriptName) {
      // Створюємо елемент <script>
      const script = document.createElement('script');
      // Формуємо шлях до файлу у залежності від ім'я скрипта
      script.src = `./js/${scriptName}.js`;
      // Додаємо скрипт у body документа
      document.body.appendChild(script);
    }