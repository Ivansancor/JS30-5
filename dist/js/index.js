const panels = document.querySelectorAll(".panel");

function openClass() {
    this.classList.toggle("open");
}

function activeClass() { // i removed the e because next line doesnt work so not needed
    // if (e.propertyName.includes("flex")) { // this doesnt work for me idk why
        this.classList.toggle("open-active");
    // } //
}

panels.forEach(panel => panel.addEventListener("click", openClass));
panels.forEach(panel => panel.addEventListener("transitionend", activeClass));