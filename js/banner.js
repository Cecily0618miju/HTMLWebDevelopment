let current = 0;
const slides = document.querySelectorAll('.banner-slide');
const total = slides.length;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
  });
}

function nextSlide() {
  current = (current + 1) % total;
  showSlide(current);
}

setInterval(nextSlide, 3000);
// 初始化
showSlide(current); 