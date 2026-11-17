const printButton = document.getElementById("printButton");

printButton?.addEventListener("click", () => {
  window.print();
});

// A gentle reveal for the letter content.
window.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".letter-content");
  if (content) {
    content.animate(
      [{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 850, easing: "ease-out", fill: "both" }
    );
  }
});
