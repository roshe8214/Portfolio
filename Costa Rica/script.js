// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modal-image");
var modalTitle = document.getElementById("modal-title");
var modalDescription = document.getElementById("modal-description");

// Get all slides
var slides = document.querySelectorAll(".slide");

// Loop through all slides
slides.forEach(function(slide) {
    slide.onclick = function() {
        modal.style.display = "flex"; // Change to flex to center the image
        modalImg.src = this.style.backgroundImage.slice(5, -2); // Remove 'url("")'
        modalTitle.innerHTML = this.querySelector(".image-title").innerHTML;
        modalDescription.innerHTML = this.querySelector(".image-description").innerHTML;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
