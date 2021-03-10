//The try statement lets you test a block of code for errors.
//The catch statement lets you handle the error.
//The throw statement lets you create custom errors.
//The finally statement lets you execute code, after try and catch, regardless of the result.
try{
    alertuser("Welcome User");
}
catch(err)
{
    console.log(err.message);
}

//throw "str"
//throw number

var x=5;
try{
    if(x==1){
        throw "one";
    }
    if(x==2)
    {
        throw "two";
    }
}
catch(err)
{
    console.log(err);
}
finally
{
    console.log("No error in the code");
}