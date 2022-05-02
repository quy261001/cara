const bar = document.querySelector(".bar");
const nav = document.querySelector(".navbar");
const close = document.querySelector(".close");
console.log(bar)
console.log(nav)
if(bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  })
}
if(close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  })
}

document.addEventListener("click", (e) => {
  console.log(e.target)
  if (!nav.contains(e.target)  && !e.target.matches(".bar")){
    nav.classList.remove("active");
  }

})