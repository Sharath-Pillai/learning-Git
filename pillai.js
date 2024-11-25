const Btn = document.querySelector('.btn button')
const square1 =document.querySelector('.square-1')
const square2 =document.querySelector('.square-2')
const square3 =document.querySelector('.square-3')


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function getOtherRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 4; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function getAnotherRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 5; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


Btn.addEventListener('click',()=>{
    const randomColor = getRandomColor();
    const otherRandomColor = getOtherRandomColor();
    const AnotherRandomColor = getAnotherRandomColor();

    square1.style.backgroundColor = randomColor;
    square2.style.backgroundColor = otherRandomColor;
    square2.style.backgroundColor = AnotherRandomColor;
    
})
