const duration = 500;

let dim: HTMLElement = document.querySelector('.dim');
let dimOutTimeoutIndex: number = null;
document.querySelector('.aside-menu').addEventListener('mouseleave', function () {
    dimOutTimeoutIndex = setTimeout(function () {
        dim.classList.remove('visible');
    }, duration);
});
let k = 0;

let activeItem = null;

let hoverIndex = null;
let outIndex = null;


//Устанавливаем event'ы для item'ов
document.querySelectorAll('.aside-menu__item').forEach(function (item, key, parent) {

    //Заранее объявляем submenu нашего item'a
    let submenu: HTMLElement = item.querySelector('.aside-submenu-wrapper');
    item.querySelector('.aside-menu__link').innerHTML += ` (${++k})`;
    submenu.querySelector('.aside-submenu1__link').innerHTML += ` (${k})`;
    if (key < 9) {
        submenu.style.top = '0';
    } else {
        submenu.style.bottom = '0';
    }


    item.addEventListener('mouseenter', function (e) {
        console.log(`enter ${key + 1}`);

        if (activeItem === item) {
            clearTimeout(outIndex);
        }
        clearTimeout(hoverIndex);
        clearTimeout(dimOutTimeoutIndex);

        hoverIndex = setTimeout(function () {
            assignActiveItem(item);
            dim.classList.add('visible');
        }, duration);
    });

    item.addEventListener('mouseleave', function (e) {
        console.log(`leave ${key + 1}`);
        if (activeItem == null) {
            clearTimeout(hoverIndex);
        }
        //Устанавливаем outTimout только если данный item является активным
        if (activeItem === item) {
            outIndex = setTimeout(function () {
                resignActiveItem(item);
                // submenu.querySelectorAll('.aside-submenu3').forEach(function (submenu3) {
                //     submenu3.style.display = 'none';
                // });
            }, duration);
        }
    })
});

function assignActiveItem(item) {
    item.classList.add('active');
    activeItem = item;
}
function resignActiveItem(item) {
    item.classList.remove('active');
    activeItem = null;
}
