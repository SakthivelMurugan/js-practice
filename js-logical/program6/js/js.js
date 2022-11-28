var number=parseInt(prompt("ente number :"));
var a=0;
for(i=1;i<number;i++)
{
	if(i*7==number)
	{
		document.write(number+" is multiple of 7")
		a+=1
	}
	else if(i==number-1 && a==0)
	{
		document.write(number+" is not multiple of 7")
	}
}

