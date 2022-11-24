const body = document.querySelector('body')
const popup = document.querySelector('.popup-country');
const btn = document.querySelector('.country');
const popupClose = document.querySelector('.popup-country__button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    body.style.overflow = "hidden";
    popup.classList.add('active');
})

popupClose.addEventListener('click', () => {
    body.style.overflow = "visible";
    popup.classList.remove('active');
})

window.addEventListener('click', (e) => {
    if (e.target == popup) {
        body.style.overflow = "visible";
        popup.classList.remove('active');
    }
})