var children=prompt("Enter children born");
children=parseInt(children);
var age=prompt("Enter age interval");
age=parseInt(age);
var x=prompt("enter x years");
x=parseInt(x);
var interval=(age*age*age)+age;
var x1=x-interval;
var y=x1/children;
alert(y);