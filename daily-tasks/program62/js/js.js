s="sssaassaaall"
l=[]
for(k=0;k<s.length;k++)
{
	l.push(s[k])
}
str=""
for(i=0;i<s.length;i++)
{
	count=0
	for(j=0;j<l.length;j++)
	{
		if(s[i]==l[j])
		{
			count++
		}
		else
		{
			//j=l.length-1
			break
		}
	}
	str+=s[i]+count
	i+=count-1
	l.splice(0,count)
}
console.log(str)