document.getElementById("file-input").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const uploadedImage = document.getElementById("uploaded-image");
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = "block";

            // Show the cancel button
            document.getElementById("file-cancel").style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

// Clear image when cancel button is clicked
document.getElementById("file-cancel").addEventListener("click", function () {
    document.getElementById("uploaded-image").style.display = "none";
    document.getElementById("file-input").value = ""; // Reset file input
    this.style.display = "none"; // Hide the cancel button
});

