
var btn = document.querySelector('button');

function ajax(){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load",function(){
    console.log(this.responseText);
  });
  oReq.open("GET","./ex_17.txt");
  oReq.send();
}

btn.addEventListener('click',ajax);
