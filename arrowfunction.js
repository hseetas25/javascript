//Arrow Functions Return Value by Default
//without parameters
myfun=()=>"VNRVJIET";

console.log(myfun());
//with parameters
myfun1=(str)=> "VNRVJIET is in "+str;

console.log(myfun1("Hyderabad"));

//classes
//class keyword
//Syntax
class className
{
    constructor(){}
};

//we can use the above class for creating objects
var object=new className();

//we can have any number of methods

class player
{
    constructor(name,debutYear)
    {
        this.name=name;
        this.debutYear=debutYear;
    }
    experience()
    {
        let date=new Date();
        let exp=date.getFullYear()-this.debutYear;
        return exp;
    }
}

let player1=new player("Rohit Sharma",2008);
console.log(`Player has ${player1.experience()} years of experience.`)
//Events
//<element event="eventName">

//Inheritance
//extends keyword is used
class players
{
    constructor(name)
    {
        this.name=name;
    }
    send()
    {
        return this.name;
    }
}
class playerDetails extends players
{
    constructor(name,role,style,hs)
    {
        super(name);
        this.role=role;
        this.style=style;
        this.hs=hs;
    }
    showDetails()
    {
        console.log(`Player Name:${this.send()}`);
        console.log(`Player Role:${this.role}`);
        console.log(`Player Style:${this.style}`);
        console.log(`Player Highest Score:${this.hs}`)
    }
}

let cricketPlayer=new playerDetails("Rohit Sharma","Opener","Right Hand Bat",264);
cricketPlayer.showDetails();