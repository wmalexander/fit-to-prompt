(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("ftp-security-theme");
    if (saved) root.setAttribute("data-theme", saved);
  } catch (e) {}
  document.addEventListener("click", function (e) {
    if (!e.target.classList || !e.target.classList.contains("theme-toggle")) return;
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("ftp-security-theme", next); } catch (err) {}
  });
})();
