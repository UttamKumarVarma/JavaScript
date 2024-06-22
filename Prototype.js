function val(){

    this.utt="Uttam";
    this.data="da";
}

let d= new val();
console.log(d.utt);

//Adding new variable with help of this variable 'd'
d.newData="mm";

console.log(d.newData);//mm

//Creating new object to use 'mm'

let va=new val();
console.log(va.newData);//output - 'undefined' as 'mm' only comes with object 'd'

//But adding protoype will help every method to access those newly added variable/methods


val.prototype.proValue="pro Value";


//new object to check protoype value
let newVal= new val();

console.log(newVal.proValue);

