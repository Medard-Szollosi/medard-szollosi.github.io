function toggleMenu() {
    const menu = document.getElementById("menu"); 
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
        menu.style.display = "block";  // Make sure the menu shows
    } else {
        menu.style.display = "none";  // Hide menu when toggled off
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const photoContainer = document.getElementById("photo-container");
    const profilePic = document.getElementById("profile-pic");
    const overlay = document.getElementById("overlay");
    const cv = document.getElementById("cv");

    if (photoContainer && profilePic && overlay && cv) {

        photoContainer.addEventListener("click", () => {

            overlay.classList.add("hidden"); // Fade out the words
            profilePic.classList.add("hidden"); // Fade out the image

            setTimeout(() => {

                photoContainer.style.display = "none"; // Hide the entire container
                cv.style.display = "block"; // Show the CV

            }, 500); // Wait for fade-out before hiding
        });
    }

});

function toggleFlip(id) {
    const container = document.getElementById(id + '-container');
    container.classList.toggle('flipped');
}
