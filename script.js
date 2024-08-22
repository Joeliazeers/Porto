//hamburger
const menuButton = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', function() {
  menuButton.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

if(window.scrollY > fixedNav){
        header.classList.add ('navbar-fixed');
    } else {
        header.classList.remove ('navbar-fixed');
    }
};

//typing effect
document.addEventListener("DOMContentLoaded", function () {
  const text = "Software Engineer";
  const typingElement = document.querySelector(".typing-effect");

  let index = 0;
  let isAdding = true;

  function type() {
    if (isAdding) {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed here
      } else {
        setTimeout(() => (isAdding = false), 2000); // Pause before deleting
        setTimeout(type, 2000);
      }
    } else {
      if (index > 0) {
        typingElement.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(type, 100); // Adjust deleting speed here
      } else {
        // Ensure the last character remains visible before retyping
        typingElement.textContent = "";
        index = 0;
        isAdding = true;
        setTimeout(type, 500); // Pause before retyping
      }
    }
  }

  type();
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(this);

  fetch('/submit-form', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.text())
  .then(data => {
    alert('Message sent successfully!');
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an error sending your message.');
  });
});