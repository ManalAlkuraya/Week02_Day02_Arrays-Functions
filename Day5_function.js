//    first cod ..
// funcrion
let number =prompt("enter the number")
function fact1(ice2){
if (number % 2 ==0){
    console.log("the number is even")
}
else{ 
    console.log("the number is adds")
    
}
return ice2;
}
console.log(fact1(number));


//    seconde code ..
// function
let grade =prompt("enter your grade")
function fact2(ice3){
if (grade >= 90){
    console.log("A")
}
else if (grade <=89  && grade >= 80){
console.log("B")
}
else if (grade <=79 && grade >= 70){
    console.log("C")

}
else if (grade <=69 && grade >= 60){
    console.log("D")
}
else if (grade <=59){
    console.log("F")
}
return ice3;
}console.log(fact2(grade));


//   third code ..

function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));


