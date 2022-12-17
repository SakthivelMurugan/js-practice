var limit=parseInt(prompt("enter limit :"));
var x=limit;
var y=limit;
var str="";
var obj={0:"a",1:"b",2:"c",3:"d",4:"e",5:"f",6:"g",7:"h",8:"i",9:"j",10:"k",11:"l",12:"m",13:"n",14:"o",15:"p",16:"q",17:"r",18:"s",19:"t",20:"u",21:"v",22:"w",23:"x",24:"y",25:"z"}
p=0;
for(i=0;i<limit;i++)
{
	for(j=0;j<limit*2;j++)
	{
		if(j==x||j==y||(i==limit-1&&x<j&&j<y))
		{
			document.write(obj[p]);
			str+=obj[p];
			p++;
		}
		else if(y>j&&j>x)
		{
			p++;
			str+=" ";
			document.write("&nbsp");
		}
		else
		{
			document.write("&nbsp");
			str+=" ";
		}
	}
	console.log(str);
	str="";
	p=0;
	x=x-1;
	y=y+1;
	document.write("<br>");
}