//given a number is armstrong or not & find the number of factorial

var f=document.createElement('div');
f.setAttribute("class","f");
f.setAttribute('style',"background-color:lime");
f.style.display="flex";
f.style.flexDirection = "column";
f.style.justifyContent = "center"; 
f.style.alignItems = "center"; 
document.body.appendChild(f);

var h1=document.createElement("h1");
f.appendChild(h1);
h1.setAttribute("style","color:purple");
h1.innerHTML="Å and n! checker :";

var i1=document.createElement("input");
f.appendChild(i1);
i1.setAttribute("id","num");
i1.style.border="2px solid purple";
i1.style.backgroundColor="pink";
i1.setAttribute("placeholder","enter number :");
i1.style.textAlign="center";
 
var f2=document.createElement("div");
f2.style.width="100px";
f2.style.height="50px";
f2.style.display="flex";
f2.style.flexDirection = "row";
f2.style.justifyContent = "space-evenly"; 
f2.style.alignItems = "center";
f2.style.margin="10px"
f.appendChild(f2);

var b1=document.createElement("button")
f2.appendChild(b1);
b1.innerHTML="Å";
b1.setAttribute("type","button");
b1.style.backgroundColor="pink";
b1.style.borderRadius="30%";
b1.onclick=function()
{
var store=document.createElement("div");
f.appendChild(store);
store.setAttribute("class","sflex");

var pt=document.createElement("p");
store.appendChild(pt);
pt.setAttribute("class","ptclass");
var number=document.getElementById("num").value;
var num=number;
var a=0,n=number,b=0;
while(n>0)
{
	temp=n%10;
	b+=1
	n=(n-temp)/10;
}
while(number>0)
{
	rem=number%10;
	a+=rem**b;
	number=(number-rem)/10;
	if(number==0)
	{
		if(num==a)
		{
			pt.innerHTML=num+" is a amstrong number";
		}
		else
		{
			pt.innerHTML=num+" is not a amstrong number";
		}
	}
}
}
var b2=document.createElement("button")
f2.appendChild(b2);
b2.innerHTML="n!";
b2.setAttribute("type","button");
b2.style.backgroundColor="pink";
b2.style.borderRadius="30%";
b2.onclick=function()
{
var store=document.createElement("div");
f.appendChild(store);
store.setAttribute("class","sflex");
var pt=document.createElement("p");
store.appendChild(pt);
pt.setAttribute("class","ptclass");
var number=document.getElementById("num").value;
var fact=1;
for(i=1;i<=number;i++)
{
	fact=fact*i;
	
}
store.innerHTML=fact+" is factorial value of "+number;
}