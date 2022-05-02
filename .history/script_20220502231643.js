const bar = document.querySelector(".tab");
const nav = document.querySelector(".navbar");

if(bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active")
  })
}