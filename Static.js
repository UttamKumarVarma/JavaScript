class Static{


    static val= "Uttam";
    val2="Data";

    static utt(){
    this.val="Nithin";
    return this.val;
    }
   static ukv(){
    this.val="ukv";
    console.log(this.val);
    }



 //   console.log(val);
}

Static.ukv();

function Utt(val){
    console.log(val);
}
function Utt(){
    console.log("uttam");

}

Utt("N");//Uttam


