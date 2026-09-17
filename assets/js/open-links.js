document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href]").forEach((link) => {
    if (link.dataset.newTab === "true") {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      return;
    }

    if (link.origin === window.location.origin || link.protocol === "mailto:") {
      link.removeAttribute("target");
      link.removeAttribute("rel");
      return;
    }

    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
});
