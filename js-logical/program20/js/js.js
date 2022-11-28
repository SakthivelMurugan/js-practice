var range=parseInt(prompt("enter minimum range :"));
var range1=parseInt(prompt("enter maximum range :"));
for(i=range;i<=range1;i++)
{
	for(j=0;j<i;j++)
	{
		if(j==0)
		{
			j+=2
		}
		else if(j==1)
		{
			j+=1
		}
		if(i==1 || i==2)
		{
			document.write(i+" is a prime number <br>")
		}
		else if(i%j!=0)
		{
			if(j==i-1)
			{
				document.write(i+" is a prime number <br>")
			}
		}
		else if(i%j==0)
		{
			document.write(i+" is not a prime number <br>")
			break
		}
		
	}
}