//객체 선언
//json과 비슷
var obj = {name : "bmj", age : 23}
console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj.name);
console.log(obj.age);

//문자열로 처리해 줘야 결과값이 정상적으로 나온다.
var myFriend = {key: "value", addition : [{name:'PhoMein'},{number:13579}]};
console.log(myFriend.key);
console.log(myFriend["key"]);


//객체안에 있는 객체를 참조
console.log(myFriend.addition[0]);
console.log(myFriend.addition[0].name);
console.log(myFriend.addition[1]);
console.log(myFriend.addition.length);


//value값이 결과로 나온다.
console.log("for문 key");
for(key in myFriend){
  console.log(myFriend[key]);
}

//key값이 결과로 나온다.
console.log("for문 value");
for(value in myFriend){
  console.log(value);
}


//결과값으로 key값이 배열값으로 나왔다.
console.log(Object.keys(myFriend));

//탐색이 필요한 경우 Object.keys함수와 forEach로 탐색하는 방법도 많이 쓰인다.
Object.keys(myFriend).forEach(function (v) {
  console.log(myFriend[v]);
});
