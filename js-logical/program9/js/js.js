var age=parseInt(prompt("enter age :"));
var gender=prompt("enter gender male or female");
if(age>22 && gender=="male")
{
	document.write("he is eligible for marriage <br>")
}
else if(gender=='male')
{
	document.write("he is not eligible for marriage <br>")
}
if(age>18 && gender=="female")
{
	document.write("she is eligible for marriage <br>")
}
else if(gender=='female')
{
	document.write("she is not eligible for marriage <br>")
}