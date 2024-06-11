
document.addEventListener("DOMContentLoaded", function() {
    let nameInput = document.getElementById('nameInput');
    let greeting = document.getElementById('greeting');

    // Функция для загрузки имени из Local Storage
    function loadName() {
        let savedName = localStorage.getItem('name');
        if (savedName) {
            greeting.innerHTML = `Hello, ${savedName}`;
            nameInput.value = savedName;
        }
    }

    // Функция для сохранения имени в Local Storage
    function saveName() {
        let name = nameInput.value;
        localStorage.setItem('name', name);
        greeting.textContent = `Hello, ${name}`;
    }

    // Загрузка имени при загрузке страницы
    loadName();

    // Экспорт функции saveName в глобальную область видимости
    window.saveName = saveName;
});
