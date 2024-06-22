let cars=["Volvo","Benz", "BMW"];
//or we can use - let cars= new Array("Volvo","Benz", "BMW"); 
console.log(cars[0]);
console.log(cars[cars.length-1]);//we cannot use length() as length in here is not a function


//array can store multiple different types of data types
let value=["Uttam", 2000,7.9,false];

console.log(value);

console.log("for of loop");
//for of loop for arrays
for(x of cars){
    console.log(x);
}

//arrays can store multiple objects as well
let one={
    name: "ram",
    age: 12
}; 
let two={
    name: "raj",
    age: 13
}; 

let number=[one,two];
console.log(number);