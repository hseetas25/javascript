//for-array
//for/in-object
//for/of
//while
//do/while
numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,17,18,19,20]
var s=0;
var i=0;
for(i=0;i<10;i++)
{
    s+=numbers[i];
}
console.log(s)
for(i=0;i<numbers.length;i++)
{
    s+=numbers[i];
}
console.log(s)
//object
var str;
var player=
{
fname:"Rohit",
lname:"Sharma",
role:"Opener",
bat_style:"Right Hand Batsman",
H_score:264
}
for(key in player)
{
    str+=player[key]+" ";
}
console.log(str)
for(i in numbers)
{
    s+=numbers[i];
}
console.log(s);
for(let i of numbers)
{
    s+=i;
}
console.log(s);
var i=0;
while(i<10)
{
    s+=numbers[i];
    i++;
}
console.log(s);
i=0;
do{
    s+=numbers[i];
    i++;
}while(i<10);
console.log(s);
var sum=0;
for(i=0;i<10;i++)
{
    if(sum>30)
    {
        break;
    }
    else if(numbers[i]%2==0)
    {
        sum+=numbers[i];
    }
    else if(numbers[i]%2!=0)
    {
        continue;
    }
}

console.log(sum);

