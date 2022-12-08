//find the root value for a number


var a=parseInt(prompt("enter no"));
for(i=0;i*i<=a;i++)
{	
	if(i*i==a)
	{
		document.write(i);
	}
}
if(i*i>a && ((i-1)*(i-1))!=a)
{
	document.write("No root value for "+a);
}
