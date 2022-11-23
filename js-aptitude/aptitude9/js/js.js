var student1=parseFloat(prompt("enter no of batch one student"));
var student2=parseFloat(prompt("enter no of batch two student"));
var student3=parseFloat(prompt("enter no of batch three student"));
var mark1=parseFloat(prompt("enter avg mark of batch one"));
var mark2=parseFloat(prompt("enter avg mark of batch two"));
var mark3=parseFloat(prompt("enter avg mark of batch three"));
avg=(student1*mark1+student2*mark2+student3*mark3)/(student1+student2+student3);
avg=parseFloat(avg);
alert(avg);
