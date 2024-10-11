let hamburger = document.getElementById('hamburger');
let menu = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu li'); // Select all menu items

hamburger.addEventListener('click', function() {
    let hamIcon = this.querySelector('.hamburger-icon');
    let crossIcon = this.querySelector('.cross-icon');
    
    if (hamIcon.style.display === 'none') {
        hamIcon.style.display = 'inline-block';
        menu.style.display = 'none';
        crossIcon.style.display = 'none';
    } else {
        crossIcon.style.display = 'inline-block';
        hamIcon.style.display = 'none';
        menu.style.display = 'block';
    }
});

// Close the menu when a menu item is clicked on small screens
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth < 768) { // Check if screen width is less than 768px
            let hamIcon = hamburger.querySelector('.hamburger-icon');
            let crossIcon = hamburger.querySelector('.cross-icon');
            hamIcon.style.display = 'inline-block';
            crossIcon.style.display = 'none';
            menu.style.display = 'none'; // Close the menu
        }
    });
});
