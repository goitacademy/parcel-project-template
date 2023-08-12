const navLinks = document.querySelectorAll('nav a');

// Loop through each link and add a click event listener to it
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Get the href attribute of the clicked link
        const href = link.getAttribute('href');

        // Use the scrollIntoView() method to scroll to the section
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
});