var n=parseInt(prompt("enter number :"));
a=1
for(i=1;i<=n;i++)
{
	a*=i;
	if(i==n)
	{
		document.write(a);
	}
}