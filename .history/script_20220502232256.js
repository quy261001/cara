const bar = document.querySelector(".bar");
const nav = document.querySelector(".navbar");
console.log(bar)
if (bar) {
  bar.addEventListener("click", (e) => {
    console(e.target)
    nav.classList.add("active");
  })
}