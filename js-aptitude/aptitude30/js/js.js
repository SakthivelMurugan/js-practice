var swimwater=prompt("enter the swimwater");
swimwater=parseInt(swimwater);
var speedwater=prompt("enter the speedwater");
speedwater=parseInt(speedwater);
var distance=parseInt(prompt("enter the distance"));
var upstream=swimwater-speedwater;
var time=distance/upstream;
alert(time);