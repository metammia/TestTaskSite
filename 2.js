let slideIndexExperts = 0;
const slidesExperts = document.querySelector('.experts-slides');
const totalSlidesExperts = document.querySelectorAll('.expert-slide').length;
const slidesPerViewExperts = 2; 
const slideWidthExperts = 100 / (totalSlidesExperts / slidesPerViewExperts);
const maxIndexExperts = Math.ceil(totalSlidesExperts / slidesPerViewExperts) - 1;
const dotsExperts = document.querySelectorAll('.experts-dots .dot');

function showSlidesExperts(index) {
    if (index > maxIndexExperts) slideIndexExperts = 0;
    if (index < 0) slideIndexExperts = maxIndexExperts;
    slidesExperts.style.transform = `translateX(-${slideIndexExperts * slideWidthExperts}%)`;
    dotsExperts.forEach(dot => dot.classList.remove('active'));
    dotsExperts[slideIndexExperts].classList.add('active');
}

document.querySelector('.experts-dots .prev-btn').addEventListener('click', () => {
    slideIndexExperts--;
    showSlidesExperts(slideIndexExperts);
});

document.querySelector('.experts-dots .next-btn').addEventListener('click', () => {
    slideIndexExperts++;
    showSlidesExperts(slideIndexExperts);
});

dotsExperts.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndexExperts = index;
        showSlidesExperts(slideIndexExperts);
    });
});

setInterval(() => {
    slideIndexExperts++;
    showSlidesExperts(slideIndexExperts);
}, 5000);