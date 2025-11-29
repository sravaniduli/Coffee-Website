// Smooth Scrolling for navigation links //
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behaviour: "smooth",
    });
  });
});

//Product hover animations
const ProductCards = document.querySelectorAll("product-card");
ProductCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-15px)";
  });

  card.addEventListener("mousleave", function () {
    this.style.transform = "translateY(0)";
  });
});
