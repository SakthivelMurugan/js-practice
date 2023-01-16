//indefOf
var num=parseInt(prompt("enter number:"))
var ar=[109,8,7,3,6,7,10]
a=0;
for(i=0;i<ar.length;i++)
{
	if(ar[i]==num)
	{
		console.log(i);
		a++;
	}
	if(i==ar.length-1&&a==0)
	{
		console.log(-1);
	}
}
