const bar = document.querySelector(".bar");
const nav = document.querySelector(".navbar");
console.log(bar)
if (bar) {
  bar.addEventListener("click", function(e) {
    nav.classList.add("active");
  })
}