window.onload = function () {
    // Get the current year and update the footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Get the last modified date and update the footer
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
};
