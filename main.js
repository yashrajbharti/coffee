const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; //Auto Scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
  // Add current to next sibling
  current.nextElementSibling.classList.add('current');
} else {
  // Add current to start
  slides[0].classList.add('current');
 }
 setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
  // Add current to prev sibling
  current.previousElementSibling.classList.add('current');
} else{
  // Add current to last
  slides[slides.length -1].classList.add('current');
 }
 setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
//spinner

  document.querySelector('section#showcase').style.display='none';
  document.querySelector('section#boxes').style.display='none';
  document.querySelector('div.slider').style.display='none';
  document.querySelector('section#starbucks').style.display='none';
  document.querySelector('*').classList.add('spinner-2');

setTimeout(() => {
  document.querySelector('*').classList.remove('spinner-2');
  document.querySelector('section#showcase').style.display='block';
  document.querySelector('section#boxes').style.display='block';
  document.querySelector('div.slider').style.display='block';
  document.querySelector('section#starbucks').style.display='block';

},4000);
