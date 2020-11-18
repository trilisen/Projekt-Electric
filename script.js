function changeColor(color) {
    const colorsOfBike = document.querySelectorAll(".on");
    colorsOfBike.forEach(color => {
        color.classList.remove("on");
    });
    const background = document.querySelector(`.background-${color}`);
    background.classList.add("on");
}