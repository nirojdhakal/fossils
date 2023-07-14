//image slide show
  document.addEventListener("DOMContentLoaded", function () {
    // Get all slide elements
    const slides = document.querySelectorAll(".slide");
  
    // Set initial slide and index
    let currentSlideIndex = 0;
    slides[currentSlideIndex].classList.add("active");
  
    // Function to switch to the next slide
    function switchSlide() {
      slides[currentSlideIndex].classList.remove("active");
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      slides[currentSlideIndex].classList.add("active");
    }
  
    // Start the slideshow
    setInterval(switchSlide, 3000); // Adjust the duration between slides as needed
  });