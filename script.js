const openBtn = document.querySelector('.mobile-menu-open');
const closeBtn = document.querySelector('.mobile-menu-close');
const menu = document.querySelector('.mobile-menu');

openBtn.addEventListener('click', e => {
    menu.style.transform = "scaleY(1)";
    openBtn.classList.add('active');
    closeBtn.classList.add('active');
})

closeBtn.addEventListener('click', e => {
    menu.style.transform = "scaleY(0)";
    openBtn.classList.remove('active');
    closeBtn.classList.remove('active');
})