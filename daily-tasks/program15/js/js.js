//given a string is palindrome or not 


var str=prompt("ente a string :");
str=str.toString();
var s="";
for(i=str.length-1;i>=0;i--)
{
	s+=str[i];
	if(i==0)
	{
		if(s==str)
		{
			document.write(str+" is a palindrome");
		}
		else
		{
			document.write(str+" is not a palindrome");
		}
	}
}
