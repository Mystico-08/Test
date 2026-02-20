<script>
const carousel = document.querySelector('.Carousel');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 320, behavior: 'smooth' });
});

leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -320, behavior: 'smooth' });
});
</script>
