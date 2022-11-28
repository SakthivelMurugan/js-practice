function fun(ar)
{
	for(i=0;i<ar.length-1;i++)
	{
		j=i+1
		while(ar[i]<ar[j])
		{
			j+=1
				if(j==ar.length)
				{
					ar[i]=ar[i];
					i=i+1
					if(i!=ar.length-1)
					{
						j=i+1
					}
					else
					{
						j=i
					}
				}
		}
		if(ar[i]>ar[j])
		{
			temp=ar[i];
			ar[i]=ar[j];
			ar[j]=temp;
			i=i-1
		}
	}
}

ar=[]
var n=parseInt(prompt("enter number of items"));
for(i=0;i<n;i++)
{
	j=i+1;
	z=parseInt(prompt("enter item :"+j))
	ar.push(z);
}
fun(ar);
document.write("Ascending order :"+ar+"<br>");
document.write("Decending order :"+ar.reverse()+"<br>");