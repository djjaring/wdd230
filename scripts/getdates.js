// Ensure the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Set the current year in the footer
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    } else {
        console.error("Element with ID 'year' not found.");
    }

    // Set the last modified date in the footer
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
    } else {
        console.error("Element with ID 'lastModified' not found.");
    }
});