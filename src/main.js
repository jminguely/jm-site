const init = function() {
  document.getElementById("menuToggle").addEventListener("click", function() {
    document.body.classList.toggle("menuOpen");

  });
};

document.addEventListener("DOMContentLoaded", function () {
  init();
});
