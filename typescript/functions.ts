//named function
function display()
{
    console.log("Welcome to Typescript functions");
}
display();
//anonymous function
let fun=function(a:number,b:number):number
{
    return(a+b);
}
console.log(fun(5,6));

//optional parameter

function optional(a:number,b:number,c?:number)
{
    console.log(a+b+c);
}
optional(5,6,7);
optional(5,6);

//default parameter
function deflt(a:number,b:number,c=7)
{
    console.log(a+b+c);
}
deflt(5,6);
deflt(4,5,6);

//rest parameter

function rest(...x)
{
    console.log(x);
}
rest(1,2,3,4,5);
rest(1,2,3,4,5,6,7,8,9,10);