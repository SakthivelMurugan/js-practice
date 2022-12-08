//fibonacci series


var limit=parseInt(prompt("enter limit :"));
var i=0;j=1;
var temp=0;
for(k=0;k<limit;k++)
{
	document.write(i+"<br>");
	temp=j;
	j=i+j;
	i=temp;
}







