//built-in data types

let a:number=500;
let b:string="VNRVJIET";
let c:boolean=true;
function welcome():void
{

}
let d:number=null;
let e:number=undefined;
let f:any //all types of data types are supported

//user defined data types

//array
let g:number[]=[1,2,3,4,5];
let h:Array<number>=[1,2,3,4,5];
//tuple
let i:[number,string];
i=[1,"one"];
//interface

interface sum
{
    add(a:number,b:number):number;
}

let j:sum=
{
    add(a:number,b:number)
    {
        return(a+b);
    }
}
//class
class k
{
    l:number;
    m:string;
    constructor(l:number,m:string)
    {
        this.l=l;
        this.m=m;
    }
    n()
    {
        console.log(this.l,this.m);
    }
}

//enum
enum day
{
    monday,tuesday,wednesday,thursday,friday,saturday,sunday
}

let o:day;
o=day.monday;
console.log(o);

//identity

function p<Q>(arg:Q)
{
    return arg;
};

let r=p<number>(500);
let s=p<string>("VNRVJIET");

//function
function t(a:number)
{
    return(a*a);
}

t(5);