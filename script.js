window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#03516d';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

const navLinks = document.querySelectorAll('#navbar a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = '#eba03b';
    });
    
    link.addEventListener('mouseout', function() {
        this.style.color = 'white';
    });
});
