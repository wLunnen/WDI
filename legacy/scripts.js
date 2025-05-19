document.querySelectorAll('.flip-box').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

//Co
document.querySelectorAll('.tabs button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    
    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});

document.querySelectorAll('.tabs button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    
    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});

//Rnd section ---------------------------------------------------------------------------------------------------------------------

//for banner
function openMultiplePages() {
   window.open("https://www.linkedin.com/company/western-development-initiative/", "https://wlunnen.github.io/W3DAi/pages/contact");
   window.open("https://wlunnen.github.io/Co/", "_blank");
}

//for desktop and mobile emulators
function openMultipleApps() {
  window.open();
  window.open();
}
