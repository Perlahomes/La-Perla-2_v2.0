const images = document.querySelectorAll('img');

// Loop through each image and add an event listener
images.forEach(image => {
  image.addEventListener('click', function() {
    // Toggle the enlarged class on click
    image.classList.toggle('enlarged');
  });
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
      pageLanguage: 'gr',
      includedLanguages: 'en,el,es,fr,de,zh-CN,ja,ru', // Add more languages as needed
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}
