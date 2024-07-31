
    const ball = document.getElementById('ball');
    const moon = document.getElementById('moon');
    const sun = document.getElementById('sun');
    const body = document.body;

    body.addEventListener('click', function() {
        moon.classList.toggle('active');
        sun.classList.toggle('active');
        body.classList.toggle('dark');
    });
