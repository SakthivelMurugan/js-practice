/*//1.length keyword
var str=String(prompt("enter string"));
var count=0;
for(i in str)
{
	count+=1;
}
document.write(count);*/

/*//2.slice string method
var str=String(prompt("enter string"));
var arg1=parseInt(prompt("enter arg1 of slice"));
var arg2=parseInt(prompt("enter arg2 of slice"));
function f_slice(start,endlessone)
{
	temp="";
	while(start<endlessone)
	{
		temp+=str[start]
		start++;
	}
	document.write(temp);
}
f_slice(arg1,arg2);*/


/*//3.repeat string method
var str=String(prompt("enter string"));
var rep=parseInt(prompt("enter repeat argument"))
var temp="";
for(i=0;i<rep;i++)
{
	temp+=str;
}
document.write(temp);*/


/*//4.padStart string method
var str=String(prompt("enter string"));
var arg1=parseInt(prompt("enter arg1 of padstart"));
var arg2=String(prompt("enter arg2 of padstart"));
var temp=arg1-str.length;
var str2="";
var j=0;
for(i=0;i<temp;i++)
{	if(j==arg2.length)
	{
		j=0;
	}
	str2+=arg2[j]
	j++;
}
str2+=str;
document.write(str2);*/

/*//5.includes string method
var str="abcdefghijklmnpqrstuvwxyz";
var arg1="xyz";
function f_includes(word)
{	
	var j=0;
	for(i=0;i<str.length;i++)
	{
		if(str[i]==word[j])
		{
			j=j+1;
		}
		else
		{
			j=0;
		}
		if(j==word.length-1)
		{
			return true;
		}
		else if(i==str.length-1)
		{
			return false;
		}
	}
}
a=f_includes(arg1);
document.write(a);*/


/*//6.startswith string method
var str="sivaranjani";
var arg="ssiva";
var count=0;
function f_startswith(arg)
{
	for(i=0;i<arg.length;i++)
	{
		if(str[i]!=arg[i])
		{
			return false;
		}
		count++;
		if(count==arg.length)
		{
			return true;
		}
	}
}
a=f_startswith(arg);
document.write(a);*/


/*//7.match string method
var str="abcdefghijklmnpqrstuvwxyz";
var arg1="xyz";
function f_match(word)
{	
	var j=0;
	for(i=0;i<str.length;i++)
	{
		if(str[i]==word[j])
		{
			j=j+1;
		}
		else
		{
			j=0;
		}
		if(j==word.length-1)
		{
			return arg1;
		}
		else if(i==str.length-1)
		{
			return null;
		}
	}
}
a=f_match(arg1);
document.write(a);*/








