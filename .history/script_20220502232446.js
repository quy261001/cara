const bar = document.querySelector(".bar");
const nav = document.querySelector(".navbar");
console.log(bar)
if (bar) {
  bar.addEventListener("click", (e) => {
    nav.classList.add("active");
  })
}