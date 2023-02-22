function unique(list)
{
	array=[]
	for(i=0;i<list.length;i++)
	{
		count=0
		for(j=0;j<list.length;j++)
		{
			if(list[i]==list[j])
			{
				count++
			}
		}
		if(count==1)
		{
			array.push(list[i])
		}
	}
	return array
}
console.log(unique([1,2,3,4,1,2]))

function smallest2(list)
{
	for(i=0;i<list.length;i++)
	{
		for(j=0;j<list.length;j++)
		{
			if(list[i]<list[j])
			{
				temp=list[i]
				list[i]=list[j]
				list[j]=temp
			}
		}
	}
	return list[1]
}
console.log(smallest2([1,2,3,4,5]))

function convert(list)
{
	array=[]
	for(i=0;i<list.length;i++)
	{
		if(list[i]<0)
		{
			array.push(-1*list[i])
		}
	}
	return array
}
console.log((convert([1,-2,3,-4])))

function average(list)
{
	count=0
	for(i=0;i<list.length;i++)
	{
		count+=list[i]
	}
	return parseFloat(count/list.length)
}
console.log(average([1,2,3,4,5]))