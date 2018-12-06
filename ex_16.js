var el = document.querySelector(".outside");

el.addEventListener("click", function(e){
console.log("clicked!",e);
var target = e.target;
console.log(target.className , target.nodeName);
}, false);




//btn click method
function random(number){
  return Math.floor(Math.random() * (number+1));
}


//Inline method -> is not good
function randchange(){
  var randcolor = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
  console.log("rand - rgb : " + randcolor);
  document.body.style.backgroundColor= randcolor;
}

function standard(){
  var standard = 'rgb(255,255,255)'
  console.log("standard - rgb : " + standard);
  document.body.style.backgroundColor= standard;
}


var e_btn = document.querySelector('e_btn');

function event_btn(){
  var randcolor = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
  console.log("event - rgb : " + randcolor);
  document.body.style.backgroundColor= randcolor;
}

e_btn.addEventListener('cick',event_btn);
