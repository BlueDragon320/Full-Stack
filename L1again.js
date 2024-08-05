// console.log("Hello, World");

// VARIABLE 

// var a = 1;
// console.log(a);

// LET  [used for numbers which change]

// let a = 6;
// a = 0;
// console.log(a);

// CONST [used for number which wont change]

// const a = 10;
// console.log(a);

//BOOL

// let firstName = "bluedragon";
// let age = 18;
// let isMarried = false;

// console.log("This person's name is : " + firstName + " and their age is : " + age)

// ELSE IF

// let firstName = "bluedragon";
// let age = 18;
// let isMarried = false;

// if (isMarried==true) {
//     console.log(firstName + "is married");
// }

// if (isMarried==false) {
//     console.log(firstName + "is not married");
// }


// FOR LOOPS

// let answer = 0;
// for (let i=0; i<=69;i++){
//     answer = answer + i;
// }
// console.log(answer);

// ARRAYS

// const ages=[21,22,23,24,25,26,100];
// const numeberOfPeople=ages.length;

// for (let i=0; i<numeberOfPeople; i++){
//     if (ages[i] %2==0){
//         console.log(ages[i]);
//     }
// }

// Objects

// const personArray=["Blue", "Green", "pink"];
// const genderArray=["male", "male", "female"];

// const numeberOfPeople=personArray.length;

// for (let i=0; i<personArray.length; i++){
//     if (genderArray[i]=="male"){
//         console.log(personArray[i]);
//     }
// }


// const allUsers=[{
//     firstName: "Blue",
//     gender: "male"
// }, {
//     firstName: "Green",
//     gender: "male"
// }, {
//     firstName:"Pink",
//     gender: "female"
// }]
// const users1= {
//     firstName: "Blue",
//     gender:"male",
// }

// for (let i=0; i<allUsers.length; i++){
//     if (allUsers[i]["gender"=="male"]){
//         console.log(allUsers[i]["firstName"])
//     }
// }

// function sum(a, b){
//     const sumValue = a + b;
//     return sumValue;
// }

// const value = sum(1, 2)
// const value2 = sum(6, 2)
// console.log(value, value2);

// CALLBACKS

// function sum(num1, num2, fnToCall){
//     let result = num1+num2;
//     fnToCall (result);
// }

// function displayResult(data){
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data){
//     console.log("Sum's result is : " + data);
// }

// const ans = sum(1,2, displayResultPassive);


// SETTIMEOUT

// function greet(){
//     console.log("Hello bahisahab");
// }

// setTimeout(greet, 3*1000)

// SET INTERVAL

// function greetJadu(){
//     console.log("Hello World");
// }
// setInterval(greetJadu, 1*1000)