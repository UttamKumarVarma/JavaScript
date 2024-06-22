class A{

    constructor(data){
        this.data=data;
    }

    data(){
        console.log("method of Class A and data is "+ this.data);
    }
}
class B extends A{
        constructor(data, val){
            super(data);
            this.val=val;
        }
        methodB(){
            console.log("Values are "+this.data+" and "+ this.val);
        }
}

let m= new B("Uttam", "Nithin");
m.methodB();