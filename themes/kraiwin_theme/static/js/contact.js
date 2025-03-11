document.getElementById('contact-button').addEventListener('click', function () {
    let contactBox = document.getElementById('contact-box');

    contactBox.scrollIntoView({ behavior: 'smooth' });

    // Create an IntersectionObserver to detect when the element is in view
    let observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    contactBox.classList.add('flash-once');
                    setTimeout(() => {
                        contactBox.classList.remove('flash-once');
                    }, 1000);
                    observer.disconnect(); // Stop observing after triggering once
                }
            });
        },
        { threshold: 0.5 } // Adjust threshold to control when it's considered "in view"
    );

    observer.observe(contactBox);
});
