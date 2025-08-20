let slideIndexGallery = 0;
const slidesGallery = document.querySelector('.gallery-slides');
const totalSlidesGallery = document.querySelectorAll('.gallery-slide').length;
const slidesPerViewGallery = 3; 
const slideWidthGallery = 100 / (totalSlidesGallery / slidesPerViewGallery);
const dotsGallery = document.querySelectorAll('.gallery-dots .dot');

function showSlidesGallery(index) {
    if (index >= Math.ceil(totalSlidesGallery / slidesPerViewGallery)) slideIndexGallery = 0;
    if (index < 0) slideIndexGallery = Math.ceil(totalSlidesGallery / slidesPerViewGallery) - 1;
    slidesGallery.style.transform = `translateX(-${slideIndexGallery * slideWidthGallery}%)`;
    dotsGallery.forEach(dot => dot.classList.remove('active'));
    dotsGallery[slideIndexGallery].classList.add('active');
}

document.querySelector('.gallery-dots .prev-btn').addEventListener('click', () => {
    slideIndexGallery--;
    showSlidesGallery(slideIndexGallery);
});

document.querySelector('.gallery-dots .next-btn').addEventListener('click', () => {
    slideIndexGallery++;
    showSlidesGallery(slideIndexGallery);
});

dotsGallery.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndexGallery = index;
        showSlidesGallery(slideIndexGallery);
    });
});

setInterval(() => {
    slideIndexGallery++;
    showSlidesGallery(slideIndexGallery);
}, 5000);
