var flex=document.getElementById("f1");
var d=document.getElementById("d1");
d.innerHTML="flames";
var check=document.getElementById("b1");
check.innerHTML="go";
check.onclick=function()
{
	var str1=document.getElementById("i1").value;
	strone=[];
	for(a=0;a<str1.length;a++)
	{
		strone.push(str1[a]);
	}
	str1=strone;
	
	var str2=document.getElementById("i2").value;
	var strone=[];
	for(a=0;a<str2.length;a++)
	{
		strone.push(str2[a]);
	}
	str2=strone;
	var s=[];
	for(i=0;i<str1.length;i++)
	{
		for(j=0;j<str2.length;j++)
		{
			if(str1[i]==str2[j])
			{
				s.push(str1[i]);
				str1.splice(i,1);
				i-=1;
				str2.splice(j,1);
			}
		}
	}
	str=str1.concat(str2);
	sketch=str.length;
	var flames=['friends','love','affection','marriage','enemy','sibling'];
	var temp=-1;
	var a=flames.length-1;
	for(k=0;k<a;k++)
	{
		j=temp;
		for(i=0;i<sketch;i++)
		{
			j++;
			temp=j-1;
			if(j==flames.length)
			{
				j=0;
				temp=j-1;
			}
			if(i==sketch-1)
			{
				flames.splice(j,1);
			}
		}
	}
	var d=document.createElement("div");
	flex.appendChild(d);
	d.setAttribute("class","f1");
	d.setAttribute("id","f2");
	document.getElementById("f2").innerHTML=flames;
}