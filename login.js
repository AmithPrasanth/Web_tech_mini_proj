document.addEventListener('DOMContentLoaded', function() {
    const toggleFormlogin = document.getElementById('toggleFormlogin');
    const toggleFormsignup = document.getElementById('toggleFormsignup');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    toggleFormlogin.addEventListener('click', function() {
      loginForm.classList.toggle('hidden');
      signupForm.classList.toggle('hidden');
      toggleFormlogin.classList.toggle('hidden');
      toggleFormsignup.classList.toggle('hidden');
    });

    toggleFormsignup.addEventListener('click', function() {
      loginForm.classList.toggle('hidden');
      signupForm.classList.toggle('hidden');
      toggleFormlogin.classList.toggle('hidden');
      toggleFormsignup.classList.toggle('hidden');
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
  