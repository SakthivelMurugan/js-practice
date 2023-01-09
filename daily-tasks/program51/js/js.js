str1=String(prompt("enter user name :"))
len=parseInt(0)
fc=parseInt(0)
sc=parseInt(0)
num=parseInt(0)
if(str1.length>=8)
{
    len=1
}
if(str1[0]>='A' && str1[0]<='Z')
{
    fc=1
}
for(i=0;i<str1.length;i++)
{
    if((str1[i]>='A' && str1[i]<='Z') || (str1[i]>='a' && str1[i]<='z'))
	{
        sc=sc
		num=num
	}
	else if(str1[i]>=0)
	{
         num=1
	}
    else
	{
        sc=1
	}
}
if(len==1 && fc==1 && sc==1 && num==1)
{
    document.write(str1," is valid username")
}
else
{
    document.write(str1," is not valid username")
}
