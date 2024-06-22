class ClassObjectAndConstructor{

    carCompany="BMW";
    carColour="Red";
    carMileage=30;

    constructor(carCompany,carColour,carMileage){
        // this.carCompany=carCompany;
        // this.carColour=carColour;
        // this.carMileage=carMileage;
    }

    ukv(){

        console.log(this.carCompany,this.carColour,this.carMileage);

    }

}

let value=new ClassObjectAndConstructor("Benz","Black",40);
value.ukv();