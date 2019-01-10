const widget = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}


// assignment1
// type이 number인 요소만 뽑아 배열로 만드는 것

var list = []; //push로 add

function process1(object)
{
Object.keys(object).forEach(function (key) {

  if(typeof object[key] == "number")
  {
    console.log(object[key] + "is add");
    list.push(key);
  }
  else if(typeof object[key] == "object")
  {
    console.log(object[key] + "is recall function");
    process1(object[key]);
  }
});
}
process1(widget);

console.log("result is : "+list);
document.getElementById("result").innerHTML = list.toString();;
