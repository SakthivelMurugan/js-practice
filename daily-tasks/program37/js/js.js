var div=document.createElement("div");
div.style.display="flex";
div.style.flexDirection="column";
div.style.justifyContent="center";
div.style.alignItems="center";
div.style.height="100%";
div.style.width="100%";
document.body.appendChild(div); 

var input=document.createElement("input");
input.setAttribute("id","inid");
input.style.margin="10px";
input.style.width="100px";
div.appendChild(input);

var d=document.createElement("div");
d.style.display="flex";
d.style.flexDirection="row";
d.style.justifyContent="center";
d.style.alignItems="center";
d.style.height="100%";
d.style.width="100%";
div.appendChild(d);

var but=document.createElement("button");
but.innerHTML="create";
but.style.margin="10px";
but.style.width="50px";
d.appendChild(but);

var output=document.createElement("h1");
output.setAttribute("id","output");
div.appendChild(output);
output.style.height="50px";
output.style.width="40%";
output.style.display="flex";
output.style.flexDirection="column";
output.style.justifyContent="center";
output.style.alignItems="center";
	
but.onclick=function()
{
	document.getElementById("output").innerHTML=String(document.getElementById("inid").value);
	document.getElementById("output").style.color=String(document.getElementById("inid").value);
	document.getElementById("inid").style.color=String(document.getElementById("inid").value);
	//document.body.style.backgroundColor=String(document.getElementById("inid").value);
}

var b=document.createElement("button");
b.innerHTML="random";
b.style.margin="10px";
b.style.width="60px";
d.appendChild(b);
b.onclick=function()
{
	var i=Math.random()*256;
	var j=String(parseInt(i));
	var x="#"+j;
	document.getElementById("output").style.backgroundColor=x;
	document.getElementById("inid").style.backgroundColor=x;
}
