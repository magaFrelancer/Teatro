let btns = document.querySelectorAll('.info-right__btn'),
    imgs = document.querySelectorAll('.info-right__itms'),
    index = 1;


function target() {
    let atr = this.getAttribute('data-target');
    imgs[index].classList.remove('active')

    if (atr == 'prev') {
        index--;
        if (index < 0) {
            index = imgs.length - 1
        }
    } else if (atr == 'next') {
        index++;
        if (index >= imgs.length) {
            index = 0;
        }
    }
    imgs[index].classList.add('active');
}

btns.forEach(item=> {item.addEventListener('click',target)})


////
let burger = document.querySelector('#burger'),
    mobile_nav = document.querySelector('.mobile-nav'),
    exit = document.querySelector('#exit'),
    body = document.querySelector('body');

