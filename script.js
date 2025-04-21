function on(){
    const turnOn =document.getElementById('overlay');
    turnOn.classList.add('fade-in');
    turnOn.style.display = 'block';

    const overflow = document.querySelector('body');
    overflow.style.overflow = 'hidden';
}

function off(){
    const turnOff =document.getElementById('overlay');
    turnOff.style.display = 'none';

    const overflow = document.querySelector('body');
    overflow.style.overflow = '';
}

let list = document.querySelector('.slider .list');
let item = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItem = item.length - 1; 

next.onclick = function(){
    if(active + 1 > lengthItem){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider()
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItem;
    }else{
        active = active - 1;
    }
    reloadSlider();
}


let refreshSlider = setInterval(()=> {next.click()}, 5000); 
function reloadSlider(){
    let checkLeft = item[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()}, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 100){
        toTop.classList.add('active');
    }else{
        toTop.classList.remove('active');
    }
})


