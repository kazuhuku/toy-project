const target = document.querySelector(".maturi");

const observer = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting) {
    target.classList.add("active");
  }
});

observer.observe(target);