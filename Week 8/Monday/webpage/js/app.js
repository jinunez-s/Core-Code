//Select de elements
var toggle_btn;
var big_wrapper;
const main = document.querySelector("main");

function declare(){
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
}

declare();

let dark = false;

function toggleAnimation(){
   //Clone the wrapper
   dark = !dark;
   let clone = big_wrapper.cloneNode(true);
   if(dark){
       clone.classList.remove("Light");
       clone.classList.add("dark");
   }else{
       clone.classList.remove("dark");
       clone.classList.add("ligt");
   }
   clone.classList.add("copy");
   main.appendChild(clone);

document.body.classList.add("stop-scrolling");

   clone.addEventListener("animationend", () =>{
       document.body.classList.remove("stop-scrolling");
       big_wrapper.remove();
       clone.classList.remove("copy");
       //Reset variables
        declare();
        events();
   });
}
function events(){
    toggle_btn.addEventListener("click", toggleAnimation);
}
events();
//35.33
