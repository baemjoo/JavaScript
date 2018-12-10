
var btn = document.querySelector('btn');

function ajax(){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load",function(){
    console.log(this.responseText);
  });
  oReq.open("GET","https://www.naver.com");
  oReq.send();
}

btn.addEventListener('click',ajax);
