const lightMode = document.getElementById('lightMode');
const darkMode = document.getElementById('darkMode');



darkMode.addEventListener("click", function() {
    switchThemeToDark();
});

lightMode.addEventListener("click", function() {
  switchThemeToLight();
});


function switchThemeToLight() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.documentElement.setAttribute('data-theme', 'light');
  document.documentElement.style.setProperty('--border-color', '#007bff');
  const nav=document.querySelector('nav');
  if(nav){
  nav.style.backgroundColor='rgb(255 255 255/ 50%)';
  }

  const textBox=documentElementById('text-box');
  if(textBox){
  textBox.style.backgroundColor='rgb(0 0 0 / 50%)';
  }
}

function switchThemeToDark() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.documentElement.setAttribute('data-theme', 'dark');
  document.documentElement.style.setProperty('--border-color', '#ffffff');
  const nav=document.querySelector('nav');
  if(nav){
  nav.style.backgroundColor='rgb(0 0 0 / 50%)';
  }

  const textBox=documentElementById('text-box');
  if(textBox){
  textBox.style.backgroundColor='rgb(255 255 255 / 50%)';
  }
}