class Encap{

    constructor(){
        let val1,val2;
    }


    val1set(data){
        this.val1=data;
    }
    val1get(){
        return this.val1;
    }
    val2set(data){
        this.val2=data;
    }
    val2get(){
        return this.val2;
    }
    
    

}

let dataVal= new Encap();
dataVal.val1set("UKV");
console.log(dataVal.val1get());
dataVal.val2set("UKN");
console.log(dataVal.val2get());