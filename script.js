window.addEventListener('scroll', function() {
    const menu = document.getElementById('menu');
    if (window.scrollY > 50) {
        menu.style.backgroundColor = '#03516d';
    } else {
        menu.style.backgroundColor = '#333';
    }
});

const navLinks = document.querySelectorAll('#menu a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = '#eba03b';
    });
    
    link.addEventListener('mouseout', function() {
        this.style.color = 'white';
    });
});
