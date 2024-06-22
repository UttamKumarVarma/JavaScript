let s="welcome";
let x= new String("Uttam");// or let x = new String();

console.log(x);// [String: 'Uttam']

//charAt()
console.log(s.charAt(0));//w

//concat
console.log(s.concat(x));//welcomeUttam
//we can use concat multiple times
console.log(s.concat(x).concat("garu"));//welcomeUttamgaru


//replace
let value= s.replace("c","k");
console.log(value);//welkome

//substring here first value should be guven based on indices(from 0). last value should be based on length of string(from 1)
console.log(value.substring(0,1));//w 
console.log(value.substring(0,2));//we

let arr= "This is home";
arraysValues=arr.split(" ");
console.log(arraysValues);//[ 'This', 'is', 'home' ]

//trim, this removes first and last spaces from a string
let data= "  Welcome Home   "
console.log(data);//  Welcome Home
console.log(data.trim());//Welcome Home


//Numbers Methods. Always use Number class while useing these methods. while you want to get number as output.
let number= new Number(10);
let number1= 2.1;
let number3= 10e2; //In these ways we can declare numbers

console.log(number,number1,number3);

//isInteger()- chekcs if number is integer or not

console.log(Number.isInteger(number));//false as this is object
console.log(Number.isInteger(number1));//false
console.log(Number.isInteger("Uttam"));//false

//parseInt() - use to convert string to inteegr
console.log(Number.parseInt("10"));//10 converted to integer number

//typeof used to find type of variable
console.log(typeof(10));//number

//parse float
console.log(Number.parseFloat("100.25"));//100.25 and string is converted to float number

//toString method - converts number to string

console.log(typeof(number.toString()));//number whihc is number converted to string - output-string







