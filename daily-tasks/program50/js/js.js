limit=parseInt(prompt("enter limit :"));
str="";
for(i=0;i<limit;i++)
{
	for(j=0;j<=i;j++)
	{
		if(i==parseInt(limit/2))
		{
			document.write("*");
			str+="*";
		}
		else if((i<(Math.floor(limit/2)))&&(j<parseInt(limit/2)))
		{
			document.write("*")
			str+="*";
		}
		else if((i>(Math.floor(limit/2)))&&(j>Math.ceil(limit/2)))
		{
			document.write("*")
			str+="*";
		}
		else
		{
			document.write("&nbsp")
			str+=" "
		}
	}
	console.log(str);
	str="";
	document.write("<br>");
}