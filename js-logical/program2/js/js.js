var items=parseInt(prompt("enter no of items :"));
ar=[]
for(i=0;i<items;i++)
{
	j=i+1
	var a=parseInt(prompt("enter item "+j+" of array"));
	ar.push(a);
}
for(i=0;i<ar.length;i++)
{
	if(ar[i]>0)
	{
		document.write(ar[i]+" is positive number"+"<br>");
	}
	else if(ar[i]==0)
	{
		document.write(ar[i]+" is zero"+"<br>");
	}
	else if(ar[i]<0)
	{
		document.write(ar[i]+" is negative number"+"<br>");
	}
	else
	{
		document.write("Not a number <br>")
	}
}