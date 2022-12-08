//4-Check whether a character is an alphabet, digit or special character

var c=prompt("enter char :")
if(c>0 || c<0 || c==0)
{
	document.write(c+" is a digit");
}
else if(c>='a'||c>='A')
{
	document.write(c+" is a alphabet");
}
else
{
	document.write(c+" special character")
}