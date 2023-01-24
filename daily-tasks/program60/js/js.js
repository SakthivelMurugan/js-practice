n=5
str=""
for(i=0;i<n;i++)
{
	for(j=0;j<n;j++)
	{
		if(i==0||j>=i)
		{
			str+="*"
		}
		else
		{
			str+=" "
		}
	}
	console.log(str)
	str=""
}