const openBtn = document.getElementById('open-btn');
const navbar = document.getElementById('navbar')
const closeBtn = document.getElementById('close-btn')


openBtn.addEventListener('click', () => {
    navbar.classList.toggle("toggle-menu");
})

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('toggle-menu');
})