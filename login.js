document.addEventListener('DOMContentLoaded', function() {
    const toggleForm = document.getElementById('toggleForm');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    toggleForm.addEventListener('click', function() {
      loginForm.classList.toggle('hidden');
      signupForm.classList.toggle('hidden');
    });
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const loginEmail = document.getElementById('loginEmail').value;
      const loginPassword = document.getElementById('loginPassword').value;
  
      // Perform login validation/authentication here
      // For this example, let's just log the values to console
      console.log('Login Email:', loginEmail);
      console.log('Login Password:', loginPassword);
    });
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const signupEmail = document.getElementById('signupEmail').value;
      const signupPassword = document.getElementById('signupPassword').value;
  
      // Perform signup/validation/authentication here
      // For this example, let's just log the values to console
      console.log('Signup Email:', signupEmail);
      console.log('Signup Password:', signupPassword);
    });
  });
  