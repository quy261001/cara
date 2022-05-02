const bar = document.querySelector(".bar");
const nav = document.querySelector(".navbar");
console.log(bar)

  bar.addEventListener("click", function(e) {
    bar.classList.add("active");
  })
