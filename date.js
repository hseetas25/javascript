//Date 
var date=new Date();

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

//7 numbers specify year, month, day, hour, minute, second, and millisecond 

var date1=new Date(2020,03,08,19,14,10,00);
//6 numbers specify year, month, day, hour, minute, second

var date2=new Date(2020,03,08,19,14,10);

//5 numbers specify year, month, day, hour, minute

var date3=new Date(2020,03,08,19,14);

//4 numbers specify year, month, day, hour

var date4=new Date(2020,03,08,19);

//3 numbers specify year, month, day

var date5=new Date(2020,03,08);

//2 numbers specify year, month

var date6=new Date(2020,03);

//Previous century

var p_century=new Date(47,08,15);

//string

var dateString=new Date("October 25,2001");

//string methods
datestr=new Date();
console.log(datestr.toString());
console.log(datestr.toUTCString());
console.log(datestr.toDateString());
console.log(datestr.toISOString());

