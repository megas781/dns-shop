// import TweenLite, { _gsScope, TweenPlugin, Ease, Power0, Power1, Power2, Power3, Power4, Linear } from "gsap/TweenLite.js";
import TimelineLite from "gsap/TimelineLite.js";
import "gsap/CSSPlugin.js";

class MobileMenu {

}

let burgerButton: HTMLElement = document.querySelector('.m-menu-button');
let mobileMenuWrapper: HTMLElement = document.querySelector('.m-menu-wrapper');
let mobileMenuDim: HTMLElement = document.querySelector('.m-menu-dim');
let mobileMenu: HTMLElement = document.querySelector('.m-menu');
let page: HTMLElement = document.querySelector('.page');

let duration = 0.3;


window.addEventListener('resize', function () {

    //Прячем m-menu, если ширина десктопа
    if (mobileMenuWrapper.classList.contains('open')) {
        if (window.innerWidth > 1000) {
            document.querySelector('body').classList.remove('not-scrolling');
            mobileMenuWrapper.style.display = 'none';
        } else {
            document.querySelector('body').classList.add('not-scrolling');
            mobileMenuWrapper.style.display = 'block';
        }
    }
});

function showMobileMenu() {
    mobileMenuWrapper.classList.add('open');
    document.querySelector('body').classList.add('not-scrolling');
    new TimelineLite()
        .addLabel('start')
        .set(mobileMenuWrapper, {display: 'block'})
        .to(mobileMenuDim, duration, {
            opacity: 0.3
        }, 'start')
        .fromTo(mobileMenu, duration, {
            right: '-' + getComputedStyle(mobileMenu).width
        }, {
            right: 0,
        }, 'start+=0.01');
}

function hideMobileMenu() {
    mobileMenuWrapper.classList.remove('open');
    document.querySelector('body').classList.remove('not-scrolling');
    //Анимация исчезновения
    new TimelineLite()
        .addLabel('start')
        .to(mobileMenuDim, duration, {
            opacity: 0
        }, 'start')
        .to(mobileMenu, duration, {
            right: '-' + getComputedStyle(mobileMenu).width,
            onComplete() {
                mobileMenuWrapper.scrollTo({top: 0});
            }
        }, 'start')
        .set(mobileMenuWrapper, {display: 'none'});
}

burgerButton.addEventListener('click', function (e) {
    if (mobileMenuWrapper.classList.contains('open')) {
        hideMobileMenu();
    } else {
        showMobileMenu();
    }
});
mobileMenuDim.addEventListener('click', hideMobileMenu);
