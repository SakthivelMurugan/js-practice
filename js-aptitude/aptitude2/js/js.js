var person1=parseInt(prompt("enter how many persons"));
var avgone=parseFloat(prompt("enter avg"));
var person2=parseInt(prompt("enter how many persons"));
var avgtwo=parseFloat(prompt("enter avg"));
avg=(person1*avgone+person2*avgtwo)/(person1+person2);
avg=parseFloat(avg);
alert(avg);