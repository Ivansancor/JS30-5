const panels = document.querySelectorAll(".panel");

function openClass() {
    this.classList.toggle("open");
}

function activeClass() {
    console.log(this.transition);
    if (this.transition.includes("flex")) { //this is wrong, gotta change it
        this.classList.toggle("open-active");
    }
}

panels.forEach(panel => panel.addEventListener("click", openClass));
panels.forEach(panel => panel.addEventListener("transitionend", activeClass));