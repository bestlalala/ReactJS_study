// 보통 const로 정의하고 바뀔 가능성이 있는 특수한 경우에만 let 사용

//boolean
const amIStudent = true;
console.log(amIStudent);

// undefined: 변수는 존재하는데 정의되지 않은 경우. 값이 아예 존재하지 않는 것

// array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek);
// 원소 추가 : push
daysOfWeek.push("sun");
console.log(daysOfWeek);

// object 객체
const my = {
    name : "dayeon",
    age : 24,
    major : "biosystem",
    amIBoy : false,
};
// 객체 속성에 접근: . 연산자 사용 -> 객체이름.속성
console.log(my);

my.major = "IT";
console.log(my);
// my를 const로 정의했는데 값을 변경할 수 있다?? -> const 객체의 '속성'을 변경하는 것은 가능!!

// function 함수
function sayHello(name) {
    console.log("Hello my name is " + name);
}
sayHello("yeonsu");

function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}
age = parseInt(prompt("How old are you?")); // prompt함수는 입력 값을 모두 string으로 인식함.
console.log(age); // 문자열을 입력한 경우, NaN 출력 (Not a Number)
console.log(typeof age); 
if (isNaN(age)) {
    console.log("Please write a number");
}

// querySelector 이용 -> 원하는 요소 가져오기!
const content = document.querySelector(".content h1");