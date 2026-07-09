let img = document.querySelectorAll('img');
let currentIndex = 0;
let nextBtn = document.querySelector('.btn.next');
let prevBtn = document.querySelector('.btn.prev');
let slides = document.querySelector('.slides');

nextBtn.addEventListener('click', ()=>{
  currentIndex++;
  if (currentIndex >= img.length) {
    currentIndex = 0;
  }
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevBtn.addEventListener('click', ()=>{
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = img.length - 1;
  }
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});
