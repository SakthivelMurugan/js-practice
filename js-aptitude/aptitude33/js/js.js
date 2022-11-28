var a=prompt("Enter Ajay vote");
a=parseInt(a);
var b=prompt("Enter bijoy vote");
b=parseInt(b);
var c=prompt("Enter chandru vote");
c=parseInt(c);
var election=a+b+c;
var percentage=(a/election)*100;
alert(percentage);