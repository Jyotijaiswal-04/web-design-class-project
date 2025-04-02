// Testimonial Carousel
const testimonialCarousel = (selector) => {
  $(selector).owlCarousel({
    loop: true,
    center: true,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    nav: false,
    dots: false,
    items: 2,
    responsive: {
      600: {
        items: 4,
      },
    },
  });
};

// Toggle Pricing
const togglePricing = () => {
  const toggle = document.querySelector("#price-toggle");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
  });
};
