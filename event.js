// Navigasi (Navbar) Toggle
const navbtn = document.querySelector('.navbtn');
const navlist = document.querySelector('.mynav-list');
const navbar = document.querySelector('.mynavbar');
const line1 = document.querySelector('.one');
const line2 = document.querySelector('.two');
const line3 = document.querySelector('.three');

navbtn.addEventListener('click', () => {
    navlist.classList.toggle('display-N');
    navbar.classList.toggle('height-N');
    navbtn.classList.toggle('navbtn-active');
    line1.classList.toggle('line-active');
    line2.classList.toggle('line-active');
    line3.classList.toggle('line-active');
});

// Fungsi Scroll Horizontal
const scrollLeftButton = document.getElementById('scrollLeftButton');
const scrollRightButton = document.getElementById('scrollRightButton');
const scrollContainer = document.getElementById('scroll2');

scrollLeftButton.addEventListener('click', () => {
    sideScroll(scrollContainer, 'left', 25, 100, 10);
});

scrollRightButton.addEventListener('click', () => {
    sideScroll(scrollContainer, 'right', 25, 100, 10);
});

function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
        if (direction === 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            clearInterval(slideTimer);
        }
    }, speed);
}
