//dom button practice


var mb=document.createElement("button");
document.body.appendChild(mb);
mb.innerHTML="append";
mb.onclick=function()
{
	var span=document.createElement("span");
	document.body.appendChild(span);
	var b=document.createElement("button");
	span.appendChild(b);
	b.innerHTML="button inside span";
}