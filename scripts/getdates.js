
document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("year").textContent = new Date().getFullYear();

    
    let lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
    } else {
        console.error("Element with ID 'lastModified' not found.");
    }
});
