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
i1.setAttribute("id","id");
i1.setAttribute("placeholder","enter id");
var i2=document.createElement("input");
div.appendChild(i2);
i2.setAttribute("id","name");
i2.setAttribute("placeholder","enter name");
var i3=document.createElement("input");
div.appendChild(i3);
i3.setAttribute("id","email");
i3.setAttribute("placeholder","enter email");
var i4=document.createElement("input");
div.appendChild(i4);
i4.setAttribute("id","password");
i4.setAttribute("placeholder","enter password");

var div2=document.createElement("div");
div2.style.display="flex";
div2.style.flexDirection="row";
div2.style.justifyContent="center";
div2.style.alignItems="center";
div.appendChild(div2);

var flex=document.createElement("div")
div.appendChild(flex);
flex.style.backgroundColor="white";


l=[]
var but1=document.createElement("button");
but1.innerHTML="showdb";
div2.appendChild(but1);
but1.onclick=function()
{
	for(i=0;i<l.length;i++)
	{	var p=document.createElement("p");
		p.innerHTML="id :"+l[i]["id"]+", name :"+l[i]["name"]+", email :"+l[i]["email"]+", password :"+l[i]["pword"]
		flex.appendChild(p);
		p.style.margin="20px";
	}
}

var but=document.createElement("button");
but.innerHTML="create";
div2.appendChild(but);
but.onclick=function()
{
	var id=document.getElementById("id").value;
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var pword=document.getElementById("password").value;
	d={"id":id,"name":name,"email":email,"pword":pword};
	l.push(d);
	document.getElementById("id").value=" ";
	document.getElementById("name").value=" ";
	document.getElementById("email").value=" ";
	document.getElementById("password").value=" ";
}
var but2=document.createElement("button");
but2.innerHTML="read";
div2.appendChild(but2);
but2.onclick=function()
{
	var id=document.getElementById("id").value;
	for(i=0;i<l.length;i++)
	{
		
		if(l[i]["id"]==id)
		{
		var p2=document.createElement("p");
		p2.innerHTML="id :"+l[i]["id"]+", name :"+l[i]["name"]+", email :"+l[i]["email"]+", password :"+l[i]["pword"]
		flex.appendChild(p2);
		p2.style.margin="20px";
		p2.style.backgroundColor="teal";
		}
	}
}
var but3=document.createElement("button");
but3.innerHTML="update";
div2.appendChild(but3);
but3.onclick=function()
{
	var id=document.getElementById("id").value;
	for(i=0;i<l.length;i++)
	{
		if(l[i]["id"]==id)
		{
			l[i]["name"]=document.getElementById("name").value;
			l[i]["email"]=document.getElementById("email").value;
			l[i]["pword"]=document.getElementById("password").value;	
		}
	}
}
var but4=document.createElement("button");
but4.innerHTML="delete";
div2.appendChild(but4);
but4.onclick=function()
{
	var id=document.getElementById("id").value;
	for(i=0;i<l.length;i++)
	{
		if(l[i]["id"]==id)
		{
			l.splice(i,1);	
		}
	}
}

