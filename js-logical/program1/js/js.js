ar=[]
n=parseInt(prompt("enter no of items :"));
for(y=0;y<n;y++)
{
	z=y+1
	a=prompt("enter item "+z+" of array");
	ar.push(a);
}
document.write(ar+"<br>")

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


document.write("largest no is :"+ar[ar.length-1]);