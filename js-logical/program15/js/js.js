var n=parseInt(prompt("enter no of items :"))
var sum=0;
for(i=0;i<n;i++)
{
	j=i+1;
	a=parseInt(prompt("enter item "+j));
	sum+=a
}
document.write("the sum of a numbers is "+sum)