function search() {
    // Get the search input value
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    
    // Get the list of items to search through
    var items = document.querySelectorAll('section li');
    
    // Clear previous search results
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
    
    // Loop through the items and display matching ones
    for (var i = 0; i < items.length; i++) {
      var itemText = items[i].textContent.toLowerCase();
      if (itemText.includes(searchInput)) {
        searchResults.appendChild(items[i].cloneNode(true));
      }
    }
    
    // Display a message if no results found
    if (searchResults.children.length === 0) {
      var noResults = document.createElement('li');
      noResults.textContent = 'No results found.';
      searchResults.appendChild(noResults);
    }
  }
  
  // Trigger search on input change
  document.getElementById('searchInput').addEventListener('input', search);



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
  