const images = document.querySelectorAll('img');

// Loop through each image and add an event listener
images.forEach(image => {
  image.addEventListener('click', function() {
    // Toggle the enlarged class on click
    image.classList.toggle('enlarged');
  });
});