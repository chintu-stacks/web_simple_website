function slideshow(){
    var x = document.querySelector('check-class');
    if(x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}

showindex = 0;
setTimeout(autoType,1000);
let i = 0;
let txt = "Place your first order and get 70% off. Choose from best Coffee Cuisnes from all over Nigeria";
let speed = 190;
function autoType(){

  if (i < txt.length) {
    document.querySelector("#auto-type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(autoType,speed);
    if(i === txt.length){
      i = 0;
      document.querySelector("#auto-type").innerHTML = '';
    }
  }
}

// showindex = 0;
// setTimeout(autoType,1000);
// let i = 0;
// let txt = "We Deliver to Your Door Step";
// let speed = 190;
// function autoType(){

//   if (i < txt.length) {
//     document.querySelector(".marq").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(autoType,speed);
//     if(i === txt.length){
//       i = 0;
//       document.querySelector(".marq").innerHTML = '';
//     }
//   }
// }