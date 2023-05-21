const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Please fill in all fields');
  } else {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit-form');
    xhr.send(formData);

    xhr.onload = () => {
      if (xhr.status === 200) {
        alert('Form submitted successfully!');
        form.reset();
      } else {
        alert('Error submitting form. Please try again later.');
      }
    };
  }
}); 

// HTML FORM
// <form>
//   {/* <label for="name">Name:</label> */}
//   <input type="text" id="name" name="name"><br>

//   <label for="email">Email:</label>
//   <input type="email" id="email" name="email"><br>

//   <label for="message">Message:</label>
//   <textarea id="message" name="message"></textarea><br>

//   <input type="submit" value="Send">
// </form>
console.log(nameInput)