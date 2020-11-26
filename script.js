function changeColor(color) {
    const colorsOfBike = document.querySelectorAll(".colors-of-bike .on");
    colorsOfBike.forEach(color => {
        color.classList.remove("on");
    });
    const background = document.querySelector(`.background-${color}`);
    background.classList.add("on");
}

function hamburgerToggle() {
    const menuContainer = document.querySelector(".menu-container");
    menuContainer.classList.toggle("on");
}

function changePage() {
    console.log("hej");
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    let page = 0;
    rightArrow.addEventListener('click', (e)=> {
        const background = document.querySelector('.first-picture');
        const leftArrow = document.querySelector('.arrow.left');
        const rightArrow = document.querySelector('.arrow.right');
        if (page === 0){
            background.style.cssText = 'background: url(img/cropped3.jpg) white; background-position: 50% 50%; background-repeat: no-repeat; background-size: cover';
            page++;
            leftArrow.classList.add('on');
        }else if (page === 1){
            background.style.cssText = 'background: url(img/cropped2.png) white; background-position: 50% 50%; background-repeat: no-repeat; background-size: cover';
            page++;
            rightArrow.classList.remove('on');
        }
    });
    leftArrow.addEventListener('click', (e)=> {
        const background = document.querySelector('.first-picture');
        const rightArrow = document.querySelector('.arrow.right');
        if (page === 1){
            background.style.cssText = 'background: url(img/cropped1.png) white; background-position: 50% 50%; background-repeat: no-repeat; background-size: cover';
            page--;
            e.target.classList.remove('on');
        };
        if (page === 2){
            background.style.cssText = 'background: url(img/cropped3.jpg) white; background-position: 50% 50%; background-repeat: no-repeat; background-size: cover';
            page--;
            rightArrow.classList.add('on');
        };
    });//
    
}

changePage();