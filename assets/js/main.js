const toggleMenu = document.getElementById('toggle-menu');
const navbar = document.getElementById('navbar-nav');

toggleMenu.addEventListener('click', function() {
    navbar.classList.toggle('show');
    if(navbar.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Tutup menu saat klik nav link
const navLink = document.querySelectorAll('.nav-link');
for(let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function() {
        navbar.classList.remove('show');
        document.body.style.overflow = '';
    });
}
