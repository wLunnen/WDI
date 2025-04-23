document.querySelectorAll('.flip-box').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
function openMultiplePages() {
   window.open("https://www.linkedin.com/company/western-development-initiative/", "_blank");
   window.open("https://wlunnen.github.io/Co/", "_blank");
};
