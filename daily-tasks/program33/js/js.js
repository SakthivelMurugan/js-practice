var limit=parseInt(prompt("enter limit :"));
if(limit%2==0)
{
	limit++;
}
var y=0;
var z=limit-1;
//var str="";
for(i=0;i<limit;i++)
{
	for(j=0;j<limit;j++)
	{
		if(j==y||j==z)
		{
			document.write("*");
			//str+="*";
		}
		else
		{
			document.write("&nbsp");
			//str+=" "
		}
	}
	//console.log(str);
	y=y+1;
	z=z-1;
	//str="";
	document.write("<br>");
}