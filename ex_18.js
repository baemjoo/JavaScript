var a = [1,2,3,"hello",null,true,[]];

console.log(a.length); //결과 7

a[10000] = 1000;

console.log(a.length);  //결과 10001

console.log(a[440]);   //undefined



//indexOf

var index_1 = [1,2,3,4].indexOf(3); // 결과 2
console.log(index_1);

var index_2 =[1,2,3,4].indexOf(7); // 7이 없기 때문에 -1
console.log(index_2);

//join으로 배열을 문자열로 합침
var Join_res = [1,2,3,4].join();  //String Join_res = "1,2,3,4"
console.log(Join_res);

//concat으로 붙이기
var Concat_res = [1,2,3,4].concat(5,8);  // [1,2,3,4,5,6]
console.log(Concat_res);

var Concat_2 = ["a","b","c","d"].concat("e","f","g");
console.log(Concat_2);

//spread operator   //concat과 똑같이 작동
var spread_1 = [1,2,3,4];
var spread_2 = [...spread_1,5,6,7,8];
console.log(spread_2);

//같은 배열원소를 가지고 있지만 두 개가 가리키는 메로리 주소는 다르기 때문에
//reference가 다르다.
var origin = [1,2,3,4];
var changed = origin.concat();
console.log(origin == changed);   //결과 false


//forEach 함수
//함수를 동작하는 함수
//자바스크립트는 1급 함수다-> 함수를 변수
var changedArray = [...spread_1,5,6,7];
changedArray.forEach(function(v,i,o)
{
  console.log("forEach"+v);
});


var fun = function(v,i,o){
  console.log("fun"+v);
}
changedArray.forEach(fun);


//map은 새로운 값은 반환하고 원래의 값은 유지 
var mapped = changedArray.map(function(v){
  return v *2 ; //changedArray 의 원소를 돌면서 값을 변경하고 새로운 배열로 만들어서 반환
});

console.log(mapped);
console.log(changedArray);
