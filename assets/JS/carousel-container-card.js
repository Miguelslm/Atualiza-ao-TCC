const carousel = document.querySelector('.carousel-container-card');
let isDown = false;
let startX;
let scrollLeft;

const startDragging = (x) => {
    isDown = true;
    carousel.classList.add('active');
    startX = x - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
};

const stopDragging = () => {
    isDown = false;
    carousel.classList.remove('active');
};

const drag = (x) => {
    if (!isDown) return;
    const walk = (x - startX) * 3; // Valor ajustável para a velocidade do arrasto
    carousel.scrollLeft = scrollLeft - walk;
};

// Eventos de mouse
carousel.addEventListener('mousedown', (e) => startDragging(e.pageX));
carousel.addEventListener('mouseleave', stopDragging);
carousel.addEventListener('mouseup', stopDragging);
carousel.addEventListener('mousemove', (e) => {
    if (isDown) {
        e.preventDefault();
        drag(e.pageX);
    }
});

// Eventos de toque
carousel.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    startDragging(touch.pageX);
});
carousel.addEventListener('touchend', stopDragging);
carousel.addEventListener('touchmove', (e) => {
    if (isDown) {
        const touch = e.touches[0];
        drag(touch.pageX);
    }
});
