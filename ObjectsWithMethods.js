let uttam={
    id: 123,
    role:"Test Engineer",
    salary: 50000,
    bonus: function(){
        return this.salary*0.1;
    }

};

console.log(uttam.bonus());

//method with argument:
let nithin={
    id: 220,
    role: "developer",
    salary: 60000,
    bonus: function(rate){
        return this.salary*rate;
    }

};
console.log(nithin.bonus(0.2));