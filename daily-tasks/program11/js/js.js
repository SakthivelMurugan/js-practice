//check wheather a number is palindrome or not


var number=parseInt(prompt("enter number :"));
var doop=number;
var a=0;
while(number>0)
{
	rem=number%10;
	a+=rem;
	number=(number-rem)/10;
	a=a*10;
}
reversed=a/10;
if(reversed==doop)
{
	document.write(doop+" is a palindrome ")
}
else
{
	document.write(doop+" is not a palindrome ")
}