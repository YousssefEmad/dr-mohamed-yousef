(function () {
  function initReviewCards() {
    var cards = document.querySelectorAll(".review-card");
    if (!cards.length) return;

    cards.forEach(function (card) {
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-expanded", "false");

      function toggle() {
        var open = card.classList.toggle("is-open");
        card.setAttribute("aria-expanded", open ? "true" : "false");
      }

      card.addEventListener("click", function (e) {
        // avoid blocking links inside overlay if any later
        if (e.target.closest("a")) return;
        toggle();
      });

      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });

    document.addEventListener("click", function (e) {
      if (e.target.closest(".review-card")) return;
      cards.forEach(function (card) {
        card.classList.remove("is-open");
        card.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReviewCards);
  } else {
    initReviewCards();
  }
})();
