//##Var, Let, const.

// var a = 1;
// a = 2;
// console.log(4);

// let a = 1;
// a = 2;
// console.log(a);

// const a = 69;
// console.log(a);

//##IF ELSE

// let naam = "Chintu";
// let age = 18;
// let jobless = true;

// console.log("This persons name is " + naam + " and their age is " + age)

// if (jobless == true) {
//     console.log(naam + " is Jobless")
// } else {
//     console.log(naam + "has a Job")
// }

//##Loops

// let answer = 0;
// for (let i = 0; i <= 100; i = i + 1) {
//     answer = i;
// }
// console.log(answer)

//##Array

// const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] % 2 == 0) {
//         console.log(ages[i]);
//     }
// }

// const personArray = ["Harry", "Milka", "Pinty"];
// const genderArray = ["male", "male", "female"];

// for (let i = 0; i < personArray.length; i++) {
//     if (genderArray[i] == "male") {
//         console.log(personArray[i]);
//     }
// }

// function sum(a, b) {
//     const sumValue = a + b;
//     return sumValue;
// }

// const value = sum(1, 2)
// const value2 = sum(1, 10)
// console.log(value);


// let sum = 0;
// for (let i = 0; i < 100000; i++) {
//     sum = sum + i;
// }
// console.log(sum);


// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's resuilt is : " + data);
// }
// const ans = sum(1, 2, displayResult);

function calculateArithmetic(a, b, type) {
    if (type == "sum") {
        const value = sum(a, b);
        return value;
    }
    if (type == "minus") {
        const value = sum(a, b)
        return a - b;
    }
}

function sum(a, b) {
    return a + b;
}

function sum(a, b) {
    return a - b;
}

const value = calculateArithmetic(1, 2, "minus");
console.log(value);