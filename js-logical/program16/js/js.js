var number=parseInt(prompt("enter number :"));
var temp=number;
var snum=String(number);
var add=parseInt(0);
if(number>9)
{
	for(i=0;i<snum.length;i++)
	{
		if(number>10)
		{
			num=number%10
		}
		else
		{
			num=number
		}
		add+=num**3;
		if(number>10)
		{
			number=((number)-number%10)/10;
		}
		else
		{
			number=number;
		}
	}
	if(add==temp)
	{
		document.write(temp+" is a amstrong number");
	}
	else
	{
		document.write(temp+" is not a amstrong number");
	}
}
else
{
	document.write(temp+" is a amstrong number");
}