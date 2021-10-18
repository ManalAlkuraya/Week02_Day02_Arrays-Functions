
// 1- 

//odd numbers * 2
let numbers = [4, 9, 7, 2, 1, 8];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        numbers[i] = numbers[i] * 2
    }
}
console.log(numbers);


//function odd numbers * 2
let numbers = [4, 9, 7, 2, 1, 8];
function funct(arr) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {

            numbers[i] = numbers[i] * 2

        }
    } return arr;
}
console.log(funct(numbers));



//2-

// even numbers * 2
let numbers = [4, 9, 7, 2, 1, 8];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        numbers[i] = numbers[i] * 2
    }
}
console.log(numbers);

// function even numbers * 2 
let numbers = [4, 9, 7, 2, 1, 8];
function funct(arr) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            numbers[i] = numbers[i] * 2
        }
    } return arr;
}
console.log(funct(numbers));



// 3-
//  favorite colors
var choices = ['blue', 'purple', 'yellow', 'pink'];
for (var i = 0; i < choices.length; i++) {
    console.log('My #' + (i + 1) + ' choice is ' + choices[i]);
}

// functin  favorite colors 
var choices = ['blue', 'purple', 'yellow', 'pink'];
function addingArray1(array2) {
    for (var i = 0; i < array2.length; i++) {

    } return array2;
}
console.log(addingArray1(choices));



// 4- push && unshift 
let stack = [2, 3, 4];
stack.push(5, 6, 7)
stack.unshift(0, 1)
console.log(stack)

//  function pus & unshift 
let stack = [2, 3, 4];
function addingArray(array1) {
    array1.push(5, 6, 7)
    array1.unshift(0, 1)
    return array1;
}
console.log(addingArray(stack));



// 5-

let A = [1, 4, 45, 6, 10, -8];
let n = 10;
let ifexist = false;
for (let index = 0; index < A.length; index++) {
    const number = A[index];
    if (n == number) {
        ifexist = true;
        break;
    }
}
if (ifexist) {
    console.log("true");
} else {
    console.log("zero");
}

//function                    
function Myfun(arr) {
    let n = 10;
    for (let index = 0; index < arr.length; index++) {
        const number = arr[index];
        if (n == number) {
            return "true"
        }
    }
    return "zero"
}
let A = [1, 8, 9, 4, 10];
console.log(Myfun(A));


//6-

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let key = 9;
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] == key)
            console.log("sum is " + numbers[i] + " + " + numbers[j] + " = " + key);

    }
}

// function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function Mynum(num) {
    let key = 9;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == key)
                console.log("sum is " + numbers[i] + " + " + numbers[j] + " = " + key);

        }
    } return (num);
}
console.log(Mynum(numbers));