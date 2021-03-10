//Regular expressions can be used to perform all types of text search and text replace operations.
//search() returns the position of the match
//replace() returns the modified sstring
 var x="VNRVJIET College"
 var check=x.search("College");
 console.log(check)
 var y=x.replace("College","Engineering College");
 var z=x.replace(/College/i,"Enginnering College");
 console.log(y);
 console.log(z);
 console.log(/V/.test("VNRVJIET"));
 console.log(/E/.exec("VNRVJIET"));