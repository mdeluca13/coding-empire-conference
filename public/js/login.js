// login function
const loginFormHandler = async (event) => {
    event.preventDefault();
  console.log('click')
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
        console.log('logged in')
      } else {
        alert(response.statusText);
      }
    }
};

// signup function
const signupFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        console.log(response.password)
        document.location.replace('/');
        console.log('logged in')
      } else {
        alert(response.statusText);
      }
    }
};
  
document.querySelector('.loginSubmit').addEventListener('click', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);