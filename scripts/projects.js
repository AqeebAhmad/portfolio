let slideIndex = 0;

// Open the modal with project-specific images
function openModal(images) {
    const modal = document.getElementById("imageModal");
    const modalSlides = document.getElementById("modalSlides");
    
    // Clear the current slides
    modalSlides.innerHTML = '';

    // Create new slides for the selected project
    images.forEach(img => {
        const slide = document.createElement("div");
        slide.classList.add("slides");
        slide.innerHTML = `<img src="res/images/${img}" alt="${img}">`;
        modalSlides.appendChild(slide);
    });

    modal.style.display = "flex"; // Show modal
    showSlides(slideIndex); // Show the first image
}

// Close the modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Navigate between slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show the current slide
function showSlides(n) {
    const slides = document.querySelectorAll(".slides");
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? "flex" : "none";
    });
}
