//Подключение мастер-стилей
require('./master.scss');

//Подключение мастер-скриптов
require('./js-libs.ts');
require('./header/topbar/topbar.ts');
require('./aside/submenu.ts');
require('./aside/submenu3.ts');
require('./mobile/m-header/m-header.js');
require('./miranda.ts');

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

