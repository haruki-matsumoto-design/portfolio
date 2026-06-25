const slides = document.querySelector('.slides');
const slideCount = 4;

let current = 0;

document.querySelector('.next').addEventListener('click', () => {
  current++;

  if (current >= slideCount) {
    current = 0;
  }

  slides.style.transform = `translateX(-${current * 25}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
  current--;

  if (current < 0) {
    current = slideCount - 1;
  }

  slides.style.transform = `translateX(-${current * 25}%)`;
});