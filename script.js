const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleText = document.querySelector('.toggle-text');
const modeIcon = document.getElementById('mode-icon');
const navBar = document.getElementById('nav');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const setMode = (mode) => {
  image1.src = `./img/undraw_conceptual_idea_${mode}.svg`;
  image2.src = `./img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `./img/undraw_proud_coder_${mode}.svg`;
  toggleText.textContent = `${mode} Mode`;
  toggleText.style.textTransform = 'capitalize';
  if (mode === 'dark') {
    navBar.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    modeIcon.className = 'fas fa-moon';
  } else {
    navBar.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    modeIcon.className = 'fas fa-sun';
  }
}


toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    setMode('dark');
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    setMode('light');
    localStorage.setItem('theme', 'light')
  }
})


// Check local storage for theme

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  setMode(currentTheme);
  currentTheme === 'dark' ? toggleSwitch.checked = true : toggleSwitch.checked = false
}
