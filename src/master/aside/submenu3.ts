(function() {
    const duration = 400;
    let activeItem = null;

    let hoverIndex = null;
    let outIndex = null;

    document.querySelectorAll('.aside-submenu2__item').forEach(function (item, key) {
        let submenu3: HTMLElement = item.querySelector('.aside-submenu3');
        item.addEventListener('mouseenter', function (e) {

            let linkWidth = parseFloat(getComputedStyle(item.querySelector('.aside-submenu2__link')).width);
            submenu3.style.left = (linkWidth + 24) + 'px';

            if (activeItem === item) {
                clearTimeout(outIndex);
            }
            clearTimeout(hoverIndex);

            // hoverIndex = setTimeout(function () {
            //     item.classList.add('active');
            //     assignActiveItem(item);
            // }, duration);
            item.classList.add('active');

        });
        item.addEventListener('mouseleave', function (e) {
            // if (activeItem === item) {
            //     outIndex = setTimeout(function () {
            //         resignActiveItem(item);
            //     }, duration);
            // }
            item.classList.remove('active');
        });
    });

    function assignActiveItem(item) {
        item.classList.add('active');
        activeItem = item;
    }
    function resignActiveItem(item) {
        item.classList.remove('active');
        activeItem = null;
    }
})();
