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
        this.descriptionElement.style.display = 'block'; // Hide the description
      } else {
        // If the image is not enlarged, add the 'enlarged' class to make it bigger
        this.imageElement.classList.add('enlarged');
        this.descriptionElement.style.display = 'none'; // Show the description
      }
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    const imageItems = document.querySelectorAll('.image-container .image-item');
    imageItems.forEach(item => new ImageItem(item));
  });
  

  
  class FeedbackForm {
    constructor() {
      this.openFormButton = document.getElementById("openFormButton");
      this.feedbackForm = document.getElementById("feedbackForm");
      this.feedbackFormInner = document.getElementById("feedbackFormInner");
      this.feedbackText = document.getElementById("feedbackText");
  
      this.setupEventListeners();
    }
  
    openForm() {
      this.feedbackForm.classList.remove("hidden");
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const userFeedback = this.feedbackText.value.trim();
      if (userFeedback.length > 0 && userFeedback.split(' ').length <= 100) {
        alert("Feedback-ul dvs. a fost trimis cu succes!");
        this.feedbackText.value = "";
      } else {
        alert("Vă rugăm să introduceți un feedback valid (maximum 100 de cuvinte).");
      }
    }
  
    setupEventListeners() {
      this.openFormButton.addEventListener("click", () => this.openForm());
      this.feedbackFormInner.addEventListener("submit", (event) => this.handleSubmit(event));
    }
  }
  
  const feedbackForm = new FeedbackForm();
  

