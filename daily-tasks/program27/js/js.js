var n1=String(prompt("enter string1 :"));
var n2=String(prompt("enter string2 :"));
function fun(name1,name2)
{
	var count=0;
	for(i=name1.length-1;i>=0;i--)
	{
		if(name1[i]=='a'||name1[i]=='e'||name1[i]=='i'||name1[i]=='o'||name1[i]=='u')
		{
			count++;
		}
	}
	document.write("no of vowels in "+name1+" is "+count+"<br>");
	var total=0;
	for(i=name2.length-1;i>=0;i--)
	{
		if(name2[i]=='a'||name2[i]=='e'||name2[i]=='i'||name2[i]=='o'||name2[i]=='u')
		{
			total++;
		}
	}
	document.write("no of vowels in "+name2+" is "+total+"<br>");
	if(count>total)
	{
		document.write(name1+" contains more vowels compared to "+name2)
	}
	else if(count<total)
	{
		document.write(name2+" contains more vowels compared to "+name1)
	}
	else
	{
		document.write(name1+" and "+name2+" contains same no of vowels ")
	}

}
fun(n1,n2);