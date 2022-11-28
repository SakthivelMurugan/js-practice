var train1=parseInt(prompt("enter the train1"));
var train2=parseInt(prompt("enter the train2"));
var distance=parseInt(prompt("enter the distance"));
var time=parseInt(prompt("enter the time"));
var speed=(distance/time)/train2;
var firsttrain=train1*speed;
alert(firsttrain);