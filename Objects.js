let person=
{
    name: "Uttam",
    height: 5.9,
    weight: 65

};
console.log(person[3]);//undefined
console.log(person["name"]);
console.log(person.name);




//Add a new property to the existing object
person["grade"] = 10;

console.log(person.grade);

//update existing property
person.grade=9;

console.log("Updated grade is = "+person.grade);

//delete the property
delete person.grade;
console.log(person.grade);//output will be undefined


//reading all properties using for in loop.
for(let x in person){
    console.log(x+ " : "+person[x] );
}