console.log("Оценка за задание: 50\nВёрстка соответствует макету. Ширина экрана 768px +26\nНи на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12\nНа ширине экрана 768рх реализовано адаптивное меню +12 (Рекомендуется сделать появление бургер-меню на ширине 1024px)");

/*BURGER MENU*/

const body = document.querySelector('body');
const burgerMenuBtn = document.querySelector(".burger_menu");
const menu = document.querySelector(".menu_list");

burgerMenuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    burgerMenuBtn.classList.toggle('menu_open');
    if (burgerMenuBtn.classList.contains('menu_open')) {
        menu.classList.add('menu_visible');
    } else {
        menu.classList.remove('menu_visible');
    }
})

menu.addEventListener('click', onMenuClick);

function onMenuClick(event) {
    if (event.target.closest(".menu_item")) {
        burgerMenuBtn.classList.remove('menu_open');
        menu.classList.remove('menu_visible');
    }
}

body.addEventListener('click', closeMenu);

// function closeMenu(event) {
//     // event.stopPropagation();
//     if (event.target.className === 'wrapper' || event.target.className === 'welcome_title' || event.target.className === 'logo') {
//         burgerMenuBtn.classList.remove('menu_open');
//         menu.classList.remove('menu_visible');
//     }
// }

function closeMenu(event) {
    const { clientX, clientY } = event;
    const { x, y } = menu.getBoundingClientRect();//метод позволять получить позиционирование элемента, т.е. его размеры и координаты по осям на страницы

    if (clientX >= x && clientY >= y) return;//ловим, где была мышка и сравниваем с параметрами элемента

    if (menu.classList.contains('menu_visible')) {
        burgerMenuBtn.classList.remove('menu_open');
        menu.classList.remove('menu_visible');
    }

}