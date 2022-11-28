var items=parseInt(prompt("enter no of items :"));
ar=[]
for(i=0;i<items;i++)
{
	j=i+1
	var a=parseInt(prompt("enter item "+j+" of array"));
	ar.push(a);
}
for(i=0;i<ar.length;i++)
{
	for(j=0;j<ar[i];j++)
	{
		if(j==0)
		{
			j+=2
		}
		else if(j==1)
		{
			j+=1
		}
		if(ar[i]==1 || ar[i]==2)
		{
			document.write(ar[i]+" is a prime number <br>")
		}
		else if(ar[i]%j!=0)
		{
			if(j==ar[i]-1)
			{
				document.write(ar[i]+" is a prime number <br>")
			}
		}
		else if(ar[i]%j==0)
		{
			document.write(ar[i]+" is not a prime number <br>")
			break
		}
		
	}
}