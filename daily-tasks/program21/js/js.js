//get three number and find ascending and descending order without usian looping statement



var num1=parseInt(prompt("enter number1"));
var num2=parseInt(prompt("enter number2"));
var num3=parseInt(prompt("enter number3"));
document.write("decending order:");
if(num1>num2&&num1>num3)
{
	document.write(num1+" ");
	if(num2>num3)
	{
		document.write(num2+" ");
		document.write(num3+"  <br>");
		document.write("ascending order: "+num3+" "+num2+" "+num1+"<br>");
	}
	else(num2<num3)
	{
	document.write(num3+" ");
	document.write(num2+" <br>");
	document.write("ascending order: "+num2+" "+num3+" "+num1+"<br>");
	}
}
else if(num2>num1&&num2>num3)
{
	document.write(num2+" ");
	if(num1>num3)
	{
		document.write(num1+" ");
		document.write(num3+"  <br>");
		document.write("ascending order: "+num3+" "+num1+" "+num2+"<br>");
	}
	else
	{
	document.write(num3+" ");
	document.write(num1+" <br> ");
	document.write("ascending order: "+num1+" "+num3+" "+num2+"<br>");
	}
}
else
{
	document.write(num3+" ");
	if(num2>num1)
	{
		document.write(num2+" ");
		document.write(num1+" <br> ");
		document.write("ascending order: "+num1+" "+num2+" "+num3+"<br>");
	}
	else
	{
	document.write(num1+" ");
	document.write(num2+"  <br>");
	document.write("ascending order: "+num2+" "+num1+" "+num3+"<br>");
	}
}





/*document.write("ascending order: <br>");
if(num1<num2&&num1<num3)
{
	document.write(num1+" ");
	if(num2<num3)
	{
		document.write(num2+" ");
		document.write(num3+" <br> ");
	}
	else
	{
	document.write(num3+" ");
	document.write(num2+" <br> ");
	}
}
else if(num2<num1&&num2<num3)
{
	document.write(num2+" ");
	if(num1<num3)
	{
		document.write(num1+" ");
		document.write(num3+" <br> ");
	}
	else
	{
	document.write(num3+" ");
	document.write(num1+" <br> ");
	}
}
else
{
	document.write(num3+" ");
	if(num2<num1)
	{
		document.write(num2+" ");
		document.write(num1+" <br> ");
	}
	else
	{
	document.write(num1+" ");
	document.write(num2+"  <br>");
	}
}*/