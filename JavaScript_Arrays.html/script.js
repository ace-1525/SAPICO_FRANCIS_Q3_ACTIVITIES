//Javascript Arrays
const cars = ["Honda", "BMW", "Audi"];
cars[0] = "Honda";
cars[1] = "BMW";
cars[2] = "Audi";

console.log(cars[0]);

//adding and removing elements
cars.push("Honda");
cars.pop("Toyota");

//getting the number of elements
console.log(cars.length);

//looping through an array 
const fruits = ["Apple", "Banana", "Orange", "Mango"];
for (let i = 0; i <= fruits.length -1; i++){
    console.log("Fruits #" ,i + " " + fruits[i]);
}

//mixing elements types
const mixedArr = [12, "Hello", true, 95.54, "world"];
console.log(mixedArr.length);

//for loop vs for each
let scores = [90, 85, 78, 92, 88];

//using for loop
for(let j = 0; j < scores.length; j++){
    console.log("Index", j,": ", scores[j]);
}

//using for loop value only method
let sum = 0; 
let average = 0;
for (let score of scores){
    console.log("Score: ", scores);
    sum += score;
    average = sum / scores.length;
    console.log("Sum: ", sum);
    console.log("Average: ", average);
}

    //using forEach methof
scores.forEach(function(score, index){
    console.log("Index", index, ": ", score);
}   );


//searching arrays
const colors = ["Red", "Black", "Green", "Yellow"];
console.log(colors.indexOf("Green"));
console.log(colors.lastIndexOf("Black"));


//remove 1 element and add "Back" at inbox 1
colors.splice(1, 1, "Black");
console.log(colors);    
console.log(colors.sort());

//using map, filter, reduce
const ages = [18, 22, 16, 25, 30, 15];
console.log("Original Ages:", ages);

//map transform each element
let agesNextYear = ages.map(function(age){
    return age + 1;s
}   );
console.log(agesNextYear);

//filter elements based on condition
let adultAges = ages.filter(function(age){
    return age >= 18;
}   );
console.log(adultAges);
//reduce to get sum of all ages
let ageTotal = ages.reduce(function(total, age){
    return total + age;
}   , 0);
console.log(ageTotal);
