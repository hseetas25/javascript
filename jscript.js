//var keyord to assign variables
var x=5;
var y=5;
var z=x+y;
//assignment operator
x=x+5;
y=y*5;

//data types

var num=5;
var str="string";
var num_string="12345678";
var obj={fname:"Rohit",lname:"Sharma"};
var arr=["Rohit","Sharma","45","264"];
function myFunc()
{

}

//declarations
//1----->
var clgName;
clgName="VNRVJIET";
//2------>
var collegeName="VNRVJIET";

//Multiple declarations

var empId=500,empName="Abc",emppAge="20";

var a;//undefined

//Numerical and string concatenation

var concat="1"+1+1;

//var has no block level scope
{
    var js_var=5;//js_var can be accessed anywhere in this program.
}

//ES2015 with const and let keyword with block level scope

//let has block level scope
{
    let js_let=5;
}

const pi=3.14;

//Arithmetic operations

var add=5+5;
var diff=5-5;
var prod=5*5;
var div=5/5;
var mod=5%5;
var pow=5**2;
var v=50;
v--;
v++;
v+=1;
v-=1;

//type of datatype

console.log(typeof(add));
console.log(typeof(collegeName));
console.log(typeof(obj));
console.log(typeof(arr));
//consle.log(typeof(a));
console.log(typeof(myFunc));
