var str=String(prompt("enter String :"));
str=" "+str+" ";
var check=String((prompt("enter check word")));
var count=0;
var len=check.length;
for(i=0;i<str.length;i++)
{
	a=str.match(check);
	p=str.search(check)-1;
	if((a==check)&&(str[p]==" ")&&(str[p+len+1]==" "))
	{
		count++;
	}
	str=str.replace(check,"0");
}
document.write(check+" "+count+" times in this stirng ");


/*var str=String(prompt("enter String :"));
var check=String((prompt("enter check word")));
var count=0;
for(i=0;i<str.length;i++)
{
	a=str.match(check);
	if(a==check)
	{
		count++;
	}
	str=str.replace(check,"0");
}
document.write(check+" "+count+" times in this stirng ");*/