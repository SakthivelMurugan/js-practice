ar=['a','e','i','o','u'];
str1=prompt("enter string1");
str2=prompt("enter string2");
count=0;
total=0;
for(temp of str1)
{
	if(ar.includes(temp))
	{
		count++;
	}
}

for(temp of str2)
{
	if(ar.includes(temp))
	{
		total++;
	}
}
document.write("str1"+count);
document.write("str2"+total);