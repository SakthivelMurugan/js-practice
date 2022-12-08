/*3-Take input of age of 3 people by user and determine oldest and youngest among them.*/


var p1=parseInt(prompt("enter age one of person1 :"));
var p2=parseInt(prompt("enter age one of person2 :"));
var p3=parseInt(prompt("enter age one of person3 :"));
if(p1>p2 && p1>p3)
{
	document.write(p1+"is oldest"+"<br>")
}
else if(p1<p2 && p1<p3)
{
	document.write(p1+"is youngest"+"<br>")
}

if(p2>p1 && p2>p3)
{
	document.write(p2+"is oldest"+"<br>")
}
else if(p2<p1 && p2<p3)
{
	document.write(p2+"is youngest"+"<br>")
}

if(p3>p2 && p3>p1)
{
	document.write(p3+"is oldest"+"<br>")
}
else if(p3<p2 && p3<p1)
{
	document.write(p3+"is youngest"+"<br>")
}






