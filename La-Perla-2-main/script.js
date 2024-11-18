// Select the image element
const image = document.getElementById('image');

// Add a click event listener to the image
image.addEventListener('click', function() {
  // Toggle the 'enlarged' class on click
  image.classList.toggle('enlarged');
});