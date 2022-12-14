//sort the array to descending order

var limit=parseInt(prompt("enter limit :"));
var ar=[];
for(i=0;i<limit;i++)
{
	j=i+1;
	item=parseInt(prompt("enter item "+j))
	ar.push(item);
}

br=[];
for(i=0;i<ar.length&&ar.length!=0;i++)
{
	if(ar.length==1)
	{
		br.push(ar[i]);
		ar.splice(i,1);
	}
	else
	{
		j=i+1
		while(ar[i]>=ar[j])
		{
			j=j+1
			if(j==ar.length)
			{
				br.push(ar[i]);
				ar.splice(i,1);
				i=-1;
			}
		}
		if(ar[i]<ar[j])
		{
			temp=ar[i];
			ar[i]=ar[j];
			ar[j]=temp;
			i=-1;
		}
	}
}
document.write(br);



/*var limit=parseInt(prompt("enter limit :"));
var ar=[];
for(i=0;i<limit;i++)
{
	j=i+1;
	item=parseInt(prompt("enter item "+j))
	ar.push(item);
}
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
document.write(ar);*/


/*for(i=0;i<ar.length;i++)
{
	for(j=0;j<ar.length;j++)
	{
		if(ar[j]<ar[j+1])
		{
			temp=ar[j];
			ar[j]=ar[j+1];
			ar[j+1]=temp;
		}
	}
}
document.write(ar);*/