console.log("Оценка за задание: 100\nВёрстка валидная +10\nВёрстка семантическая +16\nВёрстка соответствует макету +54\nОбщие требования к верстке +20");

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