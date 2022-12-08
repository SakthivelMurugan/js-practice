//table


//type 1
const i1=document.createElement("input");
i1.setAttribute("type","text");
i1.setAttribute("id","i1");
i1.setAttribute("placeholder","enter which table :");
i1.setAttribute("className","btn");
document.body.appendChild(i1);


//type2
const i2=document.createElement("input");
i2.type = 'text';
i2.id = 'i2';
i2.placeholder='enter limit :';
i2.className= 'btn';
document.body.appendChild(i2);



const b=document.createElement("button")
document.body.appendChild(b);
b.type="button";
b.innerHTML="click";
b.onclick=function()
{
	var n1=parseInt(document.getElementById("i1").value);
	var n2=parseInt(document.getElementById("i2").value);
	for(i=1;i<=n2;i++)
	{ 
		document.write(i+"*"+n1+"="+i*n1+"<br>");
	}
}


