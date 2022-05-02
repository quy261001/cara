const bar = document.querySelector(".tab");
const nav = document.querySelector(".navbar");
console.log(bar)
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  })
}