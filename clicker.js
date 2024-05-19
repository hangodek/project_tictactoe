const block = document.querySelectorAll(".block")

block.forEach((x) => {
    x.addEventListener("click", (e) => {
        e.target.style.fontSize = "100px";
        e.target.textContent = "X";
        e.target.style.color = "red";
    })
})

export { block };