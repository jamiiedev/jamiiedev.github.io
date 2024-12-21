// JavaScript for tab switching and animations

const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
const sectionContainer = document.querySelector('.section-container');

let currentIndex = 0;
const sectionIds = ['home', 'othergames', 'animations', 'experimental', 'aboutme'];

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    // Toggle a class like 'open' on the nav links
    navLinks.classList.toggle('open');
    
    // Optionally also toggle a class on the hamburger itself if you want to animate it
    hamburger.classList.toggle('active');
  });
});

// On nav link click, switch to that section
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('data-section');
    switchSection(targetId);
  });
});

function switchSection(targetId) {
  const newIndex = sectionIds.indexOf(targetId);
  if (newIndex === -1 || newIndex === currentIndex) return;

  // Slide the entire container to show new section
  const offset = newIndex * -100;
  sectionContainer.style.transform = `translateX(${offset}vw)`;

  // Update active section class for opacity and transform animations
  sections.forEach(sec => sec.classList.remove('active'));
  const targetSection = document.getElementById(targetId);
  targetSection.classList.add('active');

  currentIndex = newIndex;
}

// Initially set the first section as active
document.getElementById('home').classList.add('active');

// Parallax effect on scroll for the home banner
window.addEventListener('scroll', () => {
  const banner = document.querySelector('.parallax-banner');
  if(banner){
    let offset = window.scrollY * 0.3;
    banner.style.backgroundPositionY = offset + 'px';
  }
});
