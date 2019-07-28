document.querySelector('.notifications-button').addEventListener('click', function () {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    }
    else {
        this.classList.add('active');
    }
});
document.querySelector('.topbar__item._expandable').addEventListener('click', function () {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    }
    else {
        this.classList.add('active');
    }
});
