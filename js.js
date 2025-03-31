document.getElementById('generate').addEventListener('click', function() {
    const imageUrl = getRandomImageUrl();
    const imgElement = document.getElementById('random-image');
    imgElement.src = imageUrl;
    imgElement.style.display = 'block'; // Show the image
});

function getRandomImageUrl() {
    return ""; // Returning an empty string, so it won't work
}