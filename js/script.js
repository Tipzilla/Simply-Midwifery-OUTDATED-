// Get the current year and set it as the text content of an element with the id "copyright-year"
const currentYear = new Date().getFullYear();
document.getElementById("copyright-year").textContent = currentYear;



// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}



// Slideshow timer
let slideIndex = 0;
let slideTimer;
let userPaused = false;

showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slideIndex after hiding slides
    if (!userPaused) {
        slideIndex++;
    }

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Check if the user paused the slideshow
    if (!userPaused) {
        // Clear the existing timer
        clearTimeout(slideTimer);

        // Set a new timer
        slideTimer = setTimeout(showSlides, 6000);
    }
}

function plusSlides(n) {
    // Pause the slideshow indefinitely
    userPaused = true;

    // Move to the next/previous slide
    showSlides((slideIndex += n));
}



// Get the list of tab buttons and the list of content boxes
const tabButtons = document.querySelectorAll('.tab-buttons .btn');
const contentBoxes = document.querySelectorAll('.box-container .box');

// Add a click event listener to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the "active" class from all tab buttons
        tabButtons.forEach(tabButton => {
            tabButton.classList.remove('active');
        });

        // Add the "active" class to the clicked tab button
        button.classList.add('active');

        const selectedCategory = button.getAttribute('data-category');

        // Hide all content boxes
        contentBoxes.forEach(box => {
            box.style.display = 'none';
        });

        // Show the content boxes with the selected category
        contentBoxes.forEach(box => {
            if (box.getAttribute('data-category') === selectedCategory || selectedCategory === 'all') {
                box.style.display = 'block';
            }
        });
    });
});