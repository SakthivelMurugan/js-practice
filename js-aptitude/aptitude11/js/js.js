var total=parseFloat(prompt("enter total runs"));
var boundaries=parseInt(prompt("enter how many boundaries"));
var six=parseInt(prompt("enter how many six"));
percentage=(total-(boundaries*4+six*6))*100/total;
percentage=parseFloat(percentage);
alert(percentage);