//Inheritance and single level inheritance
class studroll
{   
    id:number;     
    constructor(id:number) {   
       this.id=id; 
    }   
 }  
 //extends keyword for inheritance
 //super() for inheriting the variables from base class to derived class
 class studdept extends studroll {   
     name:string;
     constructor(id:number,name:string)
     {   
         super(id);
         this.name=name;
     }  
     show():void
     {
         console.log(this.id);
         console.log(this.name);
     }
 }
 let object=new studdept(500,"Abc");
 object.show();

//multilevel inheritance
 class studroll1
{   
    id:number;     
    constructor(id:number) {   
       this.id=id; 
    }   
 }  
 //extends keyword for inheritance
 //super() for inheriting the variables from base class to derived class
 class studdept1 extends studroll1 {   
     dname:string;
     constructor(id:number,dname:string)
     {    
        super(id);
         this.dname=dname;
     }  
     show():void
     {
         console.log(this.id);
         console.log(this.dname);
     }
 }
 class studsec extends studdept1
 {
        sec:string;
        constructor(id:number,dname:string,sec:string)
        {
            super(id,dname);
        }
        disp():void
        {
            console.log(this.id);
            console.log(this.dname);
            console.log(this.sec);
        }
 }

 let object1=new studsec(500,"Abc","A");

