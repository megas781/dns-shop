let burgerButton = document.querySelector('.m-menu-button');
let mobileMenuWrapper = document.querySelector('.m-menu-wrapper');
let mobileMenuDim = document.querySelector('.m-menu-dim');
let mobileMenu = document.querySelector('.m-menu');
let page = document.querySelector('.page');

let duration = 0.3;

function preventDefault(e) {
    e.preventDefault();
}

function disableScrolling() {
    let disableScrollAreas = [
        document.querySelector('.m-topbar'),
        document.querySelector('.page'),
        document.querySelector('.footer')
    ];
    ['touchmove', 'wheel'].forEach(function (eventString) {
        disableScrollAreas.forEach(function (area) {
            area.addEventListener(eventString, preventDefault);
        });
    });
}
function enableScrolling() {
    let disableScrollAreas = [
        document.querySelector('.m-topbar'),
        document.querySelector('.page'),
        document.querySelector('.footer')
    ];
    ['touchmove', 'wheel'].forEach(function (eventString) {
        disableScrollAreas.forEach(function (area) {
            // console.log('disable scrolling v0.0.1');
            area.removeEventListener(eventString, preventDefault);
        })
    });
}

window.addEventListener('resize', function() {

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
        },{
            right: 0,
        }, 'start+=0.1');
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
            right: '-' + getComputedStyle(mobileMenu).width
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
