var n=parseInt(prompt("enter no of number :"));
var b=0
for(i=0;i<n;i++)
{
	j=i+1
	a=parseInt(prompt("enter number "+j));
	b+=a
}
document.write(b/n);