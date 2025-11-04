document.querySelectorAll('.tabs button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    
    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});

document.getElementById('applicationForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Application submitted!');
  // Normally here you'd gather form data and send to server
});

// Get the modal
  //implement hashing through enctype after form is working
  //consider business selling sites to inmates to get support from the community for their cause 
  var modal = document.getElementById('id01');
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
