var input=document.createElement("input");
document.body.appendChild(input);
input.setAttribute("id","id");
var but=document.createElement("button");
document.body.appendChild(but);
but.innerHTML="remove vowels";
but.onclick=function()
{
	var str=String(document.getElementById('id').value);
	var str2="";
	for(i=0;i<str.length;i++)
	{
		if(str[i]!='a'&&str[i]!='e'&&str[i]!='i'&&str[i]!='o'&&str[i]!='u')
		{
			str2+=str[i];
		}
	}
	document.write(str2)
}