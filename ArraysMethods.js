let fruits=["apple","banana","grape","pineapple"];


//toString() and join()

console.log(fruits.toString());
console.log(fruits.join("+"));


//pop delets last value and gives last values as return to us
console.log(fruits.pop());//pineapple will be removed

//push adds value to last of array and return the length of array
console.log(fruits.push("pineapple"));

//shift helps to remove first element of the array
console.log(fruits.shift());//gives first element as return similar to 'pop'


//unshift helps to add new element in the start of array and then gives length of array similar to push
console.log(fruits.unshift("apple"));

//delete elements from array. This will delete elements in array. But keeps that index as empty. This will not chnage positions of elemenst in the array.
delete fruits[2];

console.log(fruits);//[ 'apple', 'banana', <1 empty item>, 'pineapple' ]

//concat arrays

let fruits2=["guava", "mango"];

console.log(fruits.concat(fruits2));//[ 'apple', 'banana', <1 empty item>, 'pineapple', 'guava', 'mango' ]


//we can concat multiple arrays at the same time.
let fruits3=["strawberry"];

 console.log(fruits.concat(fruits2,fruits3));

 //ouput for this is 
 //[
//     'apple',
//     'banana',
//     <1 empty item>,
//     'pineapple',
//     'guava',
//     'mango',
//     'strawberry'
//   ]

//slice() this method will split the method based on the length we assign
console.log(fruits.slice(2));//[ <1 empty item>, 'pineapple' ]


//sort(). This will sort the array and make those chnaged indexes remain to the original array
console.log(fruits.sort());//[ 'apple', 'banana', 'pineapple', <1 empty item> ]

console.log(fruits);//[ 'apple', 'banana', 'pineapple', <1 empty item> ]


//reverse() this will reverse the array and this will also chnage the original array
console.log(fruits.reverse());//[ <1 empty item>, 'pineapple', 'banana', 'apple' ]

console.log(fruits);//[ <1 empty item>, 'pineapple', 'banana', 'apple' ]


