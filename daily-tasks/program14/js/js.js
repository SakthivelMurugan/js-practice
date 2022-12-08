//grading system

var mark=parseInt(prompt("enter mark :"))
if(mark<=40)
{
	document.write("F");
}
else if(mark>40&&mark<=45)
{
	document.write("E");
}
else if(mark>45&&mark<=55)
{
	document.write("D");
}
else if(mark>55&&mark<=70)
{
	document.write("C");
}
else if(mark>70&&mark<=80)
{
	document.write("B");
}
else if(mark>80&&mark<=90)
{
	document.write("A");
}
else if(mark>90)
{
	document.write("o")
}