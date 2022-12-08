/*1- Ask user to enter age, sex ( M or F ), 
marital status ( Y or N ) and then using following rules print their place of service.

if employee is female, then she will work only in urban areas.

if employee is a male and age is in between 20 to 40 then he may work in anywhere

if employee is male and age is in between 40 to 60 then he will work in urban areas only.

And any other input of age should print "ERROR".*/



var age=parseInt(prompt("enter age :"));
var sex=prompt("enter sex M or F");
var marital_status=prompt("enter marital status Y or N");
if(sex=='F')
{
	document.write("she will work only in urban areas");
}
else if(sex=='M' && (age>=20&&age<=40))
{
	document.write("he may work in anywhere");
}
else if(sex=='M' && (age>40&&age<=60))
{
	document.write("he will work in urban areas only");
}
else
{
	document.write("ERROR");
}