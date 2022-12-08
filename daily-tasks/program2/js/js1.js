function fun(ar)
{
	for(i=0;i<ar.length-1;i++)
	{
		j=i+1;
		while(ar[i]<=ar[j])
		{
			if(ar[i]==ar[j])
			{
				temp=ar[j]
				t=j
				j+=1
				while(ar[i]<ar[j])
				{
					j+=1
				}
				if(ar[i]>ar[j])
				{
					one=ar[i];
					s=i
					ar[i]=ar[j];
					two=ar[i+1]
					ar[s]=two
					ar[i+1]=one
					three=ar[i+2]
					ar[t]=three
					ar[i+2]=temp
					ar[j]=temp;
					i=i-1
				}
				
			}
			else
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
		}
		if(ar[i]>ar[j])
		{
			temp=ar[i];
			ar[i]=ar[j];
			ar[j]=temp;
			i=i-1
		}
		else if(ar[i]==ar[j])
		{
			ar[i]=ar[i];
			x=ar[i+1];
			y=j;
			ar[i+1]=ar[j];
			ar[y]=x;
			
		}
	}
	console.log("output array "+ar)
}
/*n=parseInt(prompt("enter no of items :"))
ar=[]
for(i=0;i<n;i++)
{
	j=i+1
	a=prompt("enter item "+j+" of array")
	ar.push(a);
}
console.log("input array "+ar);
*/
ar=[1,2,3,4,5,6,6,5,4,3,2,1]
fun(ar);
