/*a=[1,2,3,4,5,6,6,5,4,3,2,1]
for(i=0;i<a.length;i++)
{
	for(j=0;j<a.length;j++)
	{
		if(a[j]>a[j+1])
		{
			temp=a[j];
			a[j]=a[j+1];
			a[j+1]=temp;		
		}
	}
}
console.log(a);

a=[1,2,3,4,5,6,6,5,4,3,2,1]
b=[]
for(i=0;i<a.length;i++)
{
	j=i+1;
	if(i==a.length-1)
	{
		b.push(a[i])
	}
	while(a[i]<=a[j])
	{
		j++;
		if(j==a.length)
		{
			b.push(a[i])
		}
	}
	if(a[i]>a[j])
	{
		temp=a[i];
		a[i]=a[j];
		a[j]=temp;
		i--;
	}
}
console.log(b);*/


/*var ar=[1,2,3,4,5,6,7,8,9,10]
for(i=0;i<ar.length;i++)
{
	if(i%2==0)

	{
		temp=ar[i];
		ar[i]=ar[i+1];
		ar[i+1]=temp;
	}
}
console.log(ar);*/


/*var num1=[13234,2,123,22];
for(let j=0;j<num1.length;j++)
{
	i=0;
	num=num1[j]
	while(num>0)
	{
		num=(num-(num%10))/10;
		i++;
	}
	num1[j]=i;
}
console.log(num1);*/

/*var num1=[13234,2,123,22];
for(let j=0;j<num1.length;j++)
{
	num=num1[j];
	temp=0;
	while(num>0)
	{
		rem=num%10;
		num=(num-rem)/10;
		temp=temp*10+rem
	}
	num1[j]=temp
}
console.log(num1)*/

a=[1,2,3]
b=[1,2,3]
b1=a
if(b==b1)
{
	console.log("same")
}
else
{
	console.log("not same")
}