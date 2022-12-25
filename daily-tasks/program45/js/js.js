var ar=[8,6,5,7,3,4,8,5,6,9,4,1,1,1,1];

/*var limit=parseInt(prompt("enter limit :"))
var ar=[];
for(i=0;i<limit;i++)
{
	var j=i+1;
	var item=parseInt(prompt("enter item "+j+" of array :"));
	ar.push(item);
}*/

//type1 removing duplicates
b=[];
for(i=0;i<ar.length;i++)
{
	for(j=-1;j<b.length;j++)
	{	
		if(b.length==-1)
		{
			b.push(ar[i])
			j=-1;
		}
		else
		{
			if(ar[i]!=b[j])
			{
				if(j==b.length-1)
				{
					b.push(ar[i])
				}
			}
			else if(ar[i]==b[j])
			{
				j=b.length;
			}
		}
	}		
}
document.write(b.sort());

function add(a)
{
	total=0;
	for(i=0;i<a.length;i++)
	{
		total+=a[i];
	}
	console.log("sum of array : ",total);
}
add(ar);

function odd_even(a)
{
	odd=[];
	even=[];
	for(i=0;i<a.length;i++)
	{
		if(a[i]%2==0)
		{
			even.push(a[i]);
		}
		else
		{
			odd.push(a[i]);
		}
	}
	console.log("odd :",odd);
	total=0;
	for(i=0;i<odd.length;i++)
	{
		total+=odd[i];
	}
	console.log("sum of odd: ",total);
	console.log("even :",even);
	total=0;
	for(i=0;i<even.length;i++)
	{
		total+=even[i];
	}
	console.log("sum of even: ",total);
}
odd_even(ar);



//type2 removing duplicates
function rem_dup(a)
{
	for(i=0;i<a.length-1;i++)
	{
		j=i+1;
		while(a[i]!=a[j]&&j!=a.length)
		{
			j++;
		}
		if(a[i]==a[j])
		{
			a.splice(i,1);
			i=-1;
		}
	}
	console.log("after removing duplicates",a);
}
rem_dup(ar.sort());



