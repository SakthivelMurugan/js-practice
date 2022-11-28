var n=prompt("enter number");
n=n.toString();
l=n.length
n=parseInt(n);
for(let i=1;i<=l;i++)
{
	document.write(n%10);
	n=(n-(n%10))/10;
	n=parseInt(n);
}