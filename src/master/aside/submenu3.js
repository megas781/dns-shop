document.querySelectorAll('.aside-submenu2__item').forEach(function (item, key) {

    let submenu3 = item.querySelector('.aside-submenu3');

    item.addEventListener('mouseenter', function (e) {
        item.classList.add('active');
        let linkWidth = parseFloat(getComputedStyle(item.querySelector('.aside-submenu2__link')).width);
        submenu3.style.left = (linkWidth + 24) + 'px';
    });
    item.addEventListener('mouseleave', function (e) {
        item.classList.remove('active');
    });
});
