const sliderImages = Array.from(document.querySelectorAll('.slide-in'));

// Runs the wrapped function once every XXms
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return () => {
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide() {
  sliderImages.forEach(sliderImage => {
    // Half way through the image
    const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
    // Bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    // Image is half visible
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    // Image is not off the screen
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
