// Dark/Light Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    themeIcon.textContent = '☀️';
  } else {
    themeIcon.textContent = '🌙';
  }
});