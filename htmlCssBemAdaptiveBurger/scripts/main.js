/*-----переменные-----------------------------------------------*/

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.body;

/*-----функции-----------------------------------------------*/

// шапка сайта
document.addEventListener('DOMContentLoaded', function() {
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    });
});
