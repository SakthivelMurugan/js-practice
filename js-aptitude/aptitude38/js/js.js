var parallel_line=parseInt(prompt("Enter parallel_line"));
var same_direction=parseInt(prompt("Enter same_direction value"));
var train_slower=parseInt(prompt("Enter train_passes value"));
var train=parallel_line-same_direction;
var meter_sec=[train*(5/18)];
var x=meter_sec*train_slower;
var y=x/2;//two trains 2
alert(y);