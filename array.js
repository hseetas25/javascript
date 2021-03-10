
//creating array
var numbers=[1,2,3,4,5];
var number=new Array(5,4,3,2,1);
//accessing array
console.log(numbers[4]);
console.log(number[1]);

console.log(typeof(numbers));
//length 
console.log(numbers.length);
number.sort();
console.log(number);

console.log(numbers[0]);//first element
console.log(numbers[numbers.length-1]);//last element

for(var i=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
}

//adding element to a array
numbers.push(6);
numbers.pop();
numbers.shift();
console.log(numbers);
numbers.unshift(1);
console.log(numbers);
console.log(number instanceof Array);

var mergeArray=numbers.concat(number);

console.log(mergeArray);

