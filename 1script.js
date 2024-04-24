function filterImages(criteria) {
  let images = document.querySelectorAll('.imagefilter');

  images.forEach(image => {
      if (criteria === 'all') {
          image.style.display = 'block';
      } else if (image.classList.contains(criteria)) {
          image.style.display = 'block';
      } else {
          image.style.display = 'none';
      }
  });
}
