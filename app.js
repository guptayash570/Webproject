const hamburger = document.getElementById('hamburger');
const navlist = document.getElementById('navbar-list');

hamburger.addEventListener('click', () => {
    navlist.classList.toggle('show');
});