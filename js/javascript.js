// Array of photo objects
const photos = [
    { src: 'img/lEDPIy5FVN-jIHPoEzs_V.jpg', alt: 'Zdjęcie 1' },
    { src: 'img/lEDPIy5FVN-jIHPoEzs_V.jpg', alt: 'Zdjęcie 2' },
    { src: 'img/lEDPIy5FVN-jIHPoEzs_V.jpg', alt: 'Zdjęcie 2' },
    { src: 'img/lEDPIy5FVN-jIHPoEzs_V.jpg', alt: 'Zdjęcie 2' },
    { src: 'img/lEDPIy5FVN-jIHPoEzs_V.jpg', alt: 'Zdjęcie 2' },
    { src: 'img/lEDPIy5FVN-jIHPoEzs_V.jpg', alt: 'Zdjęcie 3' }
  ];
  
  // Function to create photo gallery
  function createPhotoGallery() {
    const galleryContainer = document.getElementById('photo-gallery');
    
    // Loop through the photos array and create HTML elements
    photos.forEach(photo => {
      const colDiv = document.createElement('div');
      colDiv.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'photo-container');
      
      const img = document.createElement('img');
      img.src = photo.src;
      img.alt = photo.alt;
      img.classList.add('photo', 'img-fluid');
      img.setAttribute('data-bs-toggle', 'modal');
      img.setAttribute('data-bs-target', '#photoModal');
      img.onclick = () => showImage(photo.src);
      
      colDiv.appendChild(img);
      galleryContainer.appendChild(colDiv);
    });
  }
  
  // Function to display the image in the modal
  function showImage(imageSrc) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
  }
  
  // Create the gallery when the page is ready
  document.addEventListener('DOMContentLoaded', createPhotoGallery);
  