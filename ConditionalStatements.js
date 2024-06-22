let x= 50;

//if, else if, and else

if(x>=18 && x<=35){
    console.log("This person is young");
}
else if(x>35 && x<=50){
    console.log("This person is middle aged man");
}
else{
    console.log("this person is alive");

}

//switch case
let weekNumber=10;

switch(weekNumber){
    case 1: 
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
    default:
        console.log("Invalid week number");

}