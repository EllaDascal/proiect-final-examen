class ImageItem {
    constructor(containerElement) {
      this.containerElement = containerElement;
      this.imageElement = containerElement.querySelector('img');
      this.descriptionElement = containerElement.querySelector('.image-description');
      this.imageElement.addEventListener('click', this.handleImageClick.bind(this));
    }
  
    handleImageClick() {
      if (this.imageElement.classList.contains('enlarged')) {
        // If the image is already enlarged, remove the 'enlarged' class to shrink it
        this.imageElement.classList.remove('enlarged');
        this.descriptionElement.style.display = 'none'; // Hide the description
      } else {
        // If the image is not enlarged, add the 'enlarged' class to make it bigger
        this.imageElement.classList.add('enlarged');
        this.descriptionElement.style.display = 'block'; // Show the description
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const imageItems = document.querySelectorAll('.image-container .image-item');
    imageItems.forEach(item => new ImageItem(item));
  });
  
const openFormButton = document.getElementById("openFormButton");
const feedbackForm = document.getElementById("feedbackForm");
const feedbackFormInner = document.getElementById("feedbackFormInner");
const feedbackText = document.getElementById("feedbackText");


openFormButton.addEventListener("click", function () {
   
    feedbackForm.classList.remove("hidden");
});


feedbackFormInner.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const userFeedback = feedbackText.value.trim();
    if (userFeedback.length > 0 && userFeedback.split(' ').length <= 100) {
       
        alert("Feedback-ul dvs. a fost trimis cu succes!");
        feedbackText.value = "";
    } else {
        alert("Vă rugăm să introduceți un feedback valid (maximum 100 de cuvinte).");
    }
});


