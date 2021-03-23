//class
class k1
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
//object of a class

let student=new k1(500,"Abc");

class college
{
    id:string;
    name:string;

    display():void
    {
        console.log(this.id);
        console.log(this.name);
    }
}
let obj=new college();
obj.id="VNR";
obj.name="VNRVJIET";
obj.display();

class stud
{
    id:number;
    name:string;
    constructor(id:number,name:string)
    {
        this.id=id;
        this.name=name;
    }
    display():void
    {
        console.log(this.id);
        console.log(this.name);
    }
}

let obj1=new stud(500,"VNR");
obj1.display()


