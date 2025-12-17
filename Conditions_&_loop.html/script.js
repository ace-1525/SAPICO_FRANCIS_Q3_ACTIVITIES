//Activity 01

let a = 0; b = -1; c = 4;
let result;

if (a >= b && a >= c){
    if (b >= c){
        result = a + "," + b + "," + c;
    } else {
        result = a + "," + c + "," + b;
    }
} else if (b >= a && b>= c){
    if (a >= c){
        result = b + "," + a + "," + c;
    } else {
        result = b + "," + c + "," + a;
   }
} else {
    if (a >= b){
        result = c + "," + a + "," + b;
} else { 
     result = c + "," + b + "," + a;
   }
}
alert(result);

//Activity 02
let a2 = -5; b2 = -2; c2 = -6; d2 = 0; e2 = -1
let max = a2;

if (b2 > max) max = b2;
if (c2 > max) max = c2;
if (d2 > max) max = d2;
if (e2 > max) max = e2;

alert(max + "," + "No Name");

//Activity 03
let fizzBuzzCount = 0;

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i %5 === 0) {
        console.log("FizzBuzz");
        fizzBuzzCount++;
    }else if (i % 3 === 0) {
        console.log("Fizz");
    }else if (i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.log("Total FizzBuzz Count:" + " " + fizzBuzzCount);