const menuBtn = document.querySelector('.menu'); 
const list = document.querySelector('ul'); 
menuBtn.addEventListener('click', () => { 
    list.classList.toggle('is-opened') 
})
const logo = document.querySelector('.nav__logo');
logo.onclick = function () {
    location.reload();
}
