n=parseInt(prompt("enter range :"));
var x=0,y=1,z=0;
for(i=0;i<n;i++)
{
	document.write(x+"<br>");
	z=x;
	x=x+y;
	y=z;
}