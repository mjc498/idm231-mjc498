const imageButton = document.getElementById('image-button');
const popup = document.getElementById('popup');

imageButton.addEventListener('click', () => {
  popup.classList.toggle('visible'); 
});
