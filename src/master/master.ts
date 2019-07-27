//Подключение мастер-стилей
import './master.scss';

//Подключение мастер-скриптов
import './js-libs.ts';
import './header/topbar/topbar.ts';
import './aside/submenu.ts';
import './aside/submenu3.ts';
import './mobile/m-header/m-header.ts';
import './miranda.ts';

const topbarHeight: number = 34;

window.addEventListener('scroll', function () {
    if (window.scrollY >= topbarHeight) {
        document.querySelector('.prime-header').classList.add('fixed');
    } else {
        document.querySelector('.prime-header').classList.remove('fixed');
    }

    //Для мобильных устройств
    if (window.innerWidth < 1000) {
        let mTopbar: HTMLElement = document.querySelector('.m-topbar');
        if (window.scrollY >= parseFloat(getComputedStyle(mTopbar).height)) {
            mTopbar.classList.add('fixed');
        } else {
            mTopbar.classList.remove('fixed');
        }
    }
});

