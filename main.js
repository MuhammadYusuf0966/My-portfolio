document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}



// typejs home


const typed = new Typed(".animate", {
    strings: [" Mobilograf Developer", "Frontend Developer", "Photoshop Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true})


// play vedio

var video = document.getElementById('myVedio');

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

// typr

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
