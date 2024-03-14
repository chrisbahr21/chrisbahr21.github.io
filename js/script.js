// Testimonials array
const testimonials = document.querySelectorAll('.testimonial');

// Function to display random testimonials
function displayRandomTestimonials(numToShow) {
  const totalTestimonials = testimonials.length;

  // Shuffle the array to get a random order
  const shuffledTestimonials = Array.from(testimonials).sort(() => Math.random() - 0.5);

  // Display the first `numToShow` testimonials
  for (let i = 0; i < numToShow && i < totalTestimonials; i++) {
    shuffledTestimonials[i].style.display = 'block';
  }
}

// Call the function with the number of testimonials to display
displayRandomTestimonials(3);

function openNav(){
  let openClose = document.getElementById('navBox');
  openClose.classList.toggle('openClose');
}