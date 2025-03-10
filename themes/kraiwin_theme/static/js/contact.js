document.getElementById('contact-button').addEventListener('click',
    function () {
        let contact_box = document.getElementById('contact-box');
        contact_box.scrollIntoView({behavior: 'smooth'});
        contact_box.classList.add('flash-once');
        setTimeout(function () {
            contact_box.classList.remove('flash-once');
        }, 1000);
    }
);