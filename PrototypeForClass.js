class Pro{
    
    va="valie";
    data="hh";
}
//adding new variable to class
Pro.prototype.newData="Data";
//checks newData by creating object
let i= new Pro();
console.log(i.newData)
//creating method in a class
Pro.prototype.dis=function(){

    console.log(this.va+":"+this.data+":"+this.newData);
}

//object creation of Pro Class

let y=new Pro();

console.log(y.dis());