const menuToggle1 = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
const banner = document.getElementById('banner');
const about = document.getElementById('about');
const menu = document.getElementById('menu');
const expert = document.getElementById('expert');
const testimonials = document.getElementById('testimonials');
const contact = document.getElementById('contact');

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
})

menuToggle1.addEventListener('click', () => {
  menuTogglef()
})



function menuTogglef() {
  menuToggle1.classList.toggle('active');
  navigation.classList.toggle('active');
}
