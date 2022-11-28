var downstream_distance=parseInt(prompt("Enter the downstream distance"));
var downstream_time=parseInt(prompt("Enter the downstream time"));
var upstream_time=parseInt(prompt("Enter how upstream time"));
var speed=downstream_distance/downstream_time;
var x=downstream_distance/upstream_time;
var stream_speed=1/2*(speed+x);
alert(stream_speed);