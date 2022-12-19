var input=document.createElement("input");
document.body.appendChild(input);
input.setAttribute("id","id");
var but=document.createElement("button");
document.body.appendChild(but);
but.innerHTML="rsc";
but.onclick=function()
{
	var str=String(document.getElementById('id').value);
	var str2="";
	for(i=0;i<str.length;i++)
	{
		if(str.charAt(i)>='a'||str.charAt(i)>='A')
		{
			str2+=str.charAt(i);
		}
	}
	document.write(str2);
}