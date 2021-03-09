//if
//else
//else if
var no=500;
if(no<500)
{
    console.log("Number is less than 500");
}else if(no>500){
    console.log("Number is greater than 500");
}else{
    console.log("Number is equal to 500");
}

//switch
var day=new Date().getDay()
switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 0:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
}