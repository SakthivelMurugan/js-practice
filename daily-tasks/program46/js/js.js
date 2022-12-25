var number=parseInt(prompt("enter number :"))
var temp=0;
while(number>0)
{
	rem=number%10;
	temp=(temp*10)+rem;
	number=(number-rem)/10;
}
add=(temp-(temp%10))/10;
add=((add-(add%10))/10)*100;
temp=add+(((temp%10)*10)+((temp-(temp%10))/10)%10);
n=0;
while(temp>0)
{
	r=temp%10;
	n=(n*10)+r;
	temp=(temp-r)/10;
}
document.write(n);