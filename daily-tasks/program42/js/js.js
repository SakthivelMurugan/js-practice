var str=String(prompt("enter string"));
var word=String(prompt("enter check word"));
var ar=[];
var temp="";
for(i=0;i<str.length;i++)
{ 
	if(str[i]!=" ")
	{
		temp+=str[i];
	}
	if(str[i]==" "||i==str.length-1)
	{
		ar.push(temp);
		temp="";
	}
}
var count=0;
for(i=0;i<ar.length;i++)
{
	ar[i]==word?count=count+1:count=count;
}
document.write(word+" in this string is "+count+" times");