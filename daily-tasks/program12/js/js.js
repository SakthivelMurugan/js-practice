//sum of odd and sum of even using number


var num=prompt("enter number :");
var a=0,b=0;
while(num>0)
{
	rem=num%10
	if(rem%2==0)
	{
		a+=rem
	}
	else
	{
		b+=rem
	}
	num=(num-(num%10))/10;	
}
document.write(a+" is sum of even <br>");
document.write(b+" is sum of odd");