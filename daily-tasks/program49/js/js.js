var div=document.createElement("div");
div.style.display="flex";
div.style.flexDirection="column";
div.style.justifyContent="center";
div.style.alignItems="center";
div.style.backgroundColor="teal";
div.style.padding="20px";
document.body.appendChild(div);
var i1=document.createElement("input");
div.appendChild(i1);
i1.setAttribute("id","product name");
i1.setAttribute("placeholder","product name");
var i2=document.createElement("input");
div.appendChild(i2);
i2.setAttribute("id","price");
i2.setAttribute("placeholder","price");
var i3=document.createElement("input");
div.appendChild(i3);
i3.setAttribute("id","description");
i3.setAttribute("placeholder","description");
var i4=document.createElement("input");
div.appendChild(i4);
i4.setAttribute("id","quantity");
i4.setAttribute("placeholder","quantity");

var div2=document.createElement("div");
div2.style.display="flex";
div2.style.flexDirection="row";
div2.style.justifyContent="center";
div2.style.alignItems="center";
div.appendChild(div2);


l=[]
var but1=document.createElement("button");
but1.innerHTML="add";
div2.appendChild(but1);
but1.onclick=function()
{ 

	x=document.getElementById("product name").value;
	var z=0;
	for(i=0;i<l.length;i++)
	{
		if(l[i]["product name"]==x)
		{
			l[i]["product name"]=document.getElementById("product name").value;
			l[i]["price"]=document.getElementById("price").value;
			l[i]["description"]=document.getElementById("description").value;
			l[i]["quantity"]+=parseInt(document.getElementById("quantity").value);
			alert("updated successfully")
			z++;
			document.getElementById("product name").value="";
			document.getElementById("price").value="";
			document.getElementById("description").value="";
			document.getElementById("quantity").value="";
		}
	}
	if(z==0)
	{
		a=document.getElementById("product name").value;
		b=document.getElementById("price").value;
		c=document.getElementById("description").value;
		d=parseInt(document.getElementById("quantity").value);
		temp={"product name":a,"price":b,"description":c,"quantity":d};
		l.push(temp);
		document.getElementById("product name").value="";
		document.getElementById("price").value="";
		document.getElementById("description").value="";
		document.getElementById("quantity").value="";
		alert("product added successfully");
	}
}

var but=document.createElement("button");
but.innerHTML="edit";
div2.appendChild(but);
but.onclick=function()
{
	x=document.getElementById("product name").value;
	for(i=0;i<l.length;i++)
	{
		if(l[i]["product name"]==x)
		{
			l[i]["product name"]=document.getElementById("product name").value;
			l[i]["price"]=document.getElementById("price").value;
			l[i]["description"]=document.getElementById("description").value;
			l[i]["quantity"]=parseInt(document.getElementById("quantity").value);
			document.getElementById("product name").value="";
			document.getElementById("price").value="";
			document.getElementById("description").value="";
			document.getElementById("quantity").value="";
			alert("edited successfully")
		}
	}
}

var but2=document.createElement("button");
but2.innerHTML="increment";
div2.appendChild(but2);
but2.onclick=function()
{
	x=document.getElementById("product name").value;
	for(i=0;i<l.length;i++)
	{
		if(l[i]["product name"]==x)
		{
			l[i]["quantity"]+=parseInt(1);
			document.getElementById("product name").value="";
			alert("quantity increased successfully")
		}
	}
}
var but3=document.createElement("button");
but3.innerHTML="decrement";
div2.appendChild(but3);
but3.onclick=function()
{
	x=document.getElementById("product name").value;
	for(i=0;i<l.length;i++)
	{
		if(l[i]["product name"]==x)
		{
			l[i]["quantity"]-=parseInt(1);
			document.getElementById("product name").value="";
			alert("quantity decreased successfully")
		}
	}
}


