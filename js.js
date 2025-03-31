document.getElementById('generate').addEventListener('click', function() {
    const imageUrl = getRandomImageUrl();
    const imgElement = document.getElementById('random-image');
    imgElement.src = imageUrl;
    imgElement.style.display = 'block'; 
});

function getRandomImageUrl() {
    return ""; 
}
