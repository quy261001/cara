const bar = document.querySelector(".bar");
const nav = document.querySelector(".navbar");
console.log(bar)
console.log(nav)

  bar.addEventListener("click", function(e) {
    nav.classList.add("active");
  })
