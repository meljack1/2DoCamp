const loginForm = async (event) => {
    event.preventDefault();
  // The above action will prevent the automatic firing off the form element.
    // Collect values from the login form
    const email = document.querySelector('#loginUser').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const newUserFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#nameSignUp').value.trim();
    const email = document.querySelector('#emailSignUp').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.loginForm')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.newRegistrationForm')
    .addEventListener('submit', signupFormHandler);
  

   
