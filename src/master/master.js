//Подключение мастер-стилей
require('./master.scss');

require('./header/topbar/topbar.js');

//Подключение мастер-скриптов
require('./aside/submenu.js');
require('./aside/submenu3.js');
require('./mobile/m-header/m-header.js');

const topbarHeight = 34;
let onscroll = function () {
    if (window.scrollY >= topbarHeight) {
        document.querySelector('.prime-header').classList.add('fixed');
    } else {
        document.querySelector('.prime-header').classList.remove('fixed');
    }

    // console.log(window.scrollY);
    //Для мобильных устройств
    if (window.innerWidth < 1000) {
        let mTopbar = document.querySelector('.m-topbar');
        if (window.scrollY >= parseFloat(getComputedStyle(mTopbar).height)) {
            mTopbar.classList.add('fixed');
        } else {
            mTopbar.classList.remove('fixed');
        }
    }
}
window.onscroll = onscroll;
onscroll();

require('./miranda.js');
