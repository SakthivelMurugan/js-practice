//step by step and explaination 


var input1=document.createElement("input");
document.body.appendChild(input1);
input1.setAttribute("id","put");
var but=document.createElement("button");
document.body.appendChild(but);
but.innerHTML="click";
but.onclick=function()
{
	var num=parseInt(document.getElementById("put").value);
	var n=0;
	while(num>0)
	{
		rem=num%10;
		n=n*10
		n+=rem;
		num=(num-(num%10))/10;
	} 
	document.write("step by step :<br>");
	var z=n;
	while(n>0)
	{
		num=num;
		rem=n%10;
		n=(n-(n%10))/10;
		document.write(num+"+"+rem+"="+(num+rem)+"<br>");
		num=num+rem;
	}
	var num=0;
	var n=z;
	document.write("explaination :<br>");
	while(n>0)
	{
		rem=n%10;
		num+=rem;
		n=(n-rem)/10;
		if(n!=0)
		{
			document.write(rem+"+");
		}
		else
		{
			document.write(rem);
		}
	}
	document.write("="+num);
}


