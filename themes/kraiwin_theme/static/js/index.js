document.getElementById('cartoon_img').addEventListener('click', 
    function () {
        document.getElementById('colored_img').style.display = 'inline'
        document.getElementById('cartoon_img').style.display = 'none'
    }
);

document.getElementById('colored_img').addEventListener('click', 
    function () {
        document.getElementById('colored_img').style.display = 'none'
        document.getElementById('cartoon_img').style.display = 'inline'
    }
);