//functions
function myFunc(a,b)
{
    return (a+b)*(a+b);
}

var a=5,b=6;
var c=myFunc(a,b);
console.log(c)
window.alert(c)

//objects
var player=
{
fname:"Rohit",
lname:"Sharma",
role:"Opener",
bat_style:"Right Hand Batsman",
H_score:264,
fullname:function()
{
    return (this.fname+this.lname);
}
};
//Accessing properties
//object.property
//object["property"]

console.log(player["fname"]);
console.log(player.lname);
console.log(player.fullname());

//string number and boolean objects
var x=new String();
var y=new Number();
var z=new Boolean();

