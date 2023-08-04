const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

// card slider
const carousel1 = document.querySelector('.pro-container');
const arrowBtns1 = document.querySelectorAll('#product1 i');
const firstCardWidth1 = carousel1.querySelector('.pro').offsetWidth;
// const carouselChildrens1 = [...carousel1.children]



// let cardPerView1 = Math.round(carousel1.offsetWidth / firstCardWidth1);

// carouselChildrens1.slice(-cardPerView1).reverse().forEach(card => {
//     carousel1.insertAdjacentHTML("afterbegin", card.outerHTML)
// })

// carouselChildrens1.slice(0, cardPerView1).forEach(card => {
//     carousel1.insertAdjacentHTML("beforeend", card.outerHTML)
// })


let isDragging = false, startX, startScrollLeft, timeoutId;

arrowBtns1.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel1.scrollLeft += btn.id === "left" ? -firstCardWidth1 : firstCardWidth1;
    });
});

const dragStart1 = (e) => {
    isDragging = true;
    carousel1.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel1.scrollLeft
}

const dragging1 = (e) => {
    if(!isDragging) return;
    carousel1.scrollLeft = e.pageX;
    carousel1.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop1 = () => {
    isDragging = false;
    carousel1.classList.remove("dragging");
};

// const infiniteScroll1 = () => {
//     if(carousel1.scrollLeft === 0) {
//         carousel1.classList.add("no-transition")
//         carousel1.scrollLeft = carousel1.scrollWidth - ( 2 * carousel1.offsetWidth);
//         carousel1.classList.remove("no-transition")
//     }
//     else if(Math.ceil(carousel1.scrollLeft) === carousel1.scrollWidth - carousel1.offsetWidth){
//         carousel1.classList.add("no-transition")
//         carousel1.scrollLeft = carousel1.offsetWidth;
//         carousel1.classList.remove("no-transition")
//     }
// }

carousel1.addEventListener("mousedown", dragStart1);
carousel1.addEventListener("mousemove", dragging1);
document.addEventListener("mouseup", dragStop1);
// carousel1.addEventListener("scroll", infiniteScroll1);



// carousel
const carousel = document.querySelector('.card-container');
const arrowBtns = document.querySelectorAll('.wrapper i');
const firstCardWidth = carousel.querySelector('.card').offsetWidth;
const carouselChildrens = [...carousel.children]



let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
})

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML)
})


arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = e.pageX;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition")
        carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition")
    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add("no-transition")
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition")
    }
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);

