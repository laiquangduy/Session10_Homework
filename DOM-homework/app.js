let btn = document.getElementById("btn");
let div = document.getElementById("excercise");

btn.onclick = function(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
   
    let color = `rgb(${r}, ${g}, ${b})`;
    console.log(r,g,b);

    div.style.backgroundColor = color;


}
let btn1 = document.getElementById("btn1");
let div1 = document.getElementById("excercise1");

btn1.onclick = function(){
    if(div1.style.display != "none") {
        div1.style.display = "none";
    }else {
        div1.style.display = "block";
    }
}

let btn2 = document.getElementById("btn2");
let div2 = document.getElementById("excercise2");
let div3 = document.getElementById("excercise3");
btn2.onclick = function(){
    let contentTemp = "";
    let bgColorTemp = "";

    let style2 = getComputedStyle(div2);
    let style3 = getComputedStyle(div3);
    bgColorTemp = style2.backgroundColor;
    div2.style.backgroundColor = style3.backgroundColor;
    div3.style.backgroundColor = bgColorTemp;

    contentTemp = div2.innerHTML;
    div2.innerHTML = div3.innerHTML;
    div3.innerHTML = contentTemp;

}

let btn3 = document.getElementById("btn3");
let div4 = document.getElementById("excercise4");
let plus1 = "14";
btn3.onclick = function(){
    plus1 = Number(plus1) + 1;
    // console.log(plus1);
    div4.style.fontSize= `${plus1}px`;
}