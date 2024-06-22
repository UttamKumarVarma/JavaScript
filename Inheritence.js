class A{

    a=10;

    data(){
        console.log(this.a);
    }
}

class B extends A{

    b=20;
    data2(){
    console.log(this.b);
    }

}

//create object for class B

let val=new B();


//executing class A methods just by creating class B object using inheritence.
val.data();


// Overriding

class c extends B{

    data(){
        console.log("Class B Method is overrided and this method is executed");
    }

}


let v= new c();
v.data();