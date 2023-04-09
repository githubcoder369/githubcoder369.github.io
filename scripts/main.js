let a = 2;
let b = '';
let array = [1,2,3,4,5,6];

const css_box = document.querySelector('.css-box');
const my_paragraph = document.querySelector('.my-paragraph');


console.dir(css_box);

css_box.textContent = "Something else different"
css_box.addEventListener("click",(event)=>{
    a++;
    b = array[a];
    my_paragraph.textContent = `Text at: ${a}, ${b}`;    
})