  (function () {
    "use strict";
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("main-nav");
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.setAttribute("data-open", open ? "true" : "false");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.querySelector(".label").textContent = open ? "Fermer" : "Menu";
    }
    toggle.addEventListener("click", function () {
      setOpen(nav.getAttribute("data-open") !== "true");
    });
    // Fermer le menu après un clic sur un lien
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    // Fermer avec la touche Échap
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.getAttribute("data-open") === "true") { setOpen(false); toggle.focus(); }
    });
    // Réinitialiser en vue bureau
    var mq = window.matchMedia("(min-width: 881px)");
    (mq.addEventListener ? mq.addEventListener.bind(mq, "change") : mq.addListener.bind(mq))(function (e) { if (e.matches) setOpen(false); });
  })();
