//find given a number is odd or not without using condition statement


var num=parseInt(prompt("enter number :"));
for(i=0;i<=num;i++)
{
for(a=i;a%2!=0;a=a+1)
{
	document.write(a+"is odd"+"<br>");
}
}


/*var number=parseInt(prompt("enter number :"));
for(i=number;i>=0;i--)
{
	num=i
	n=0
	for(num=num;num%2==0&&num==num;num++)
	{
		document.write(num+" is even <br>");
		n+=1;
	}
	for(n1=n;n1==0;n1++)
	{
		document.write(num+" is odd <br>");
	}
}*/


/*var num=parseInt(prompt("enter number :"));
for(i=1;i<=num;i=i+2)
{
	document.write(i+"<br>");
}*/
