document.querySelectorAll('.flip-box').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
