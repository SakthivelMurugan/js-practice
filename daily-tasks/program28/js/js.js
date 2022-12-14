/*var operant1=parseInt(prompt("enter operant1"));
var operant2=parseInt(prompt("enter operant2"));
var operator=String(prompt("choose operator eigther + or - or * or /"));

//function definition
function add(operant1,operant2)
{
	document.write(operant1+operant2)
}
function sub(operant1,operant2)
{
	document.write(operant1-operant2)
}
function mul(operant1,operant2)
{
	document.write(operant1*operant2)
}
function div(operant1,operant2)
{
	document.write(operant1/operant2)
}

//calling functions
if(operator=='+')
{
	add(operant1,operant2);
}
else if(operator=='-')
{
	sub(operant1,operant2);
}
else if(operator=='*')
{
	mul(operant1,operant2);
}
else if(operator=='/')
{
	div(operant1,operant2);
}
else
{
	document.write("choose valid symbol");
}*/


var number=parseInt(prompt("enter number :"));

function armstrong(number)
{
	var num=number;
	var a=0,n=number,b=0;
	while(n>0)
	{
		temp=n%10;
		b+=1
		n=(n-temp)/10;
	}
	while(number>0)
	{
		rem=number%10;
		a+=rem**b;
		number=(number-rem)/10;
		if(number==0)
		{
			if(num==a)
			{
				document.write(num+" is a amstrong number");
			}
			else
			{
				document.write(num+" is not a amstrong number");
			}
		}
	}
}

armstrong(number);