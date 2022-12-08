var but1=document.createElement("button");
document.body.appendChild(but1);
but1.innerHTML="ascending";


var limit=parseInt(prompt("enter limit :"));
var ar=[];
for(i=0;i<limit;i++)
{
	var item=parseInt(prompt("enter item"));
	ar.push(item);
}

but1.onclick=function()
{
	br=[];
	for(i=0;i<ar.length&&ar.length!=0;i++)
	{
		if(ar.length==1)
		{
			br.push(ar[i]);
			ar.splice(i,1);
		}
		else
		{
			j=i+1
			while(ar[i]<=ar[j])
			{
				j=j+1
				if(j==ar.length)
				{
					br.push(ar[i]);
					ar.splice(i,1);
					i=-1;
				}
			}
			if(ar[i]>ar[j])
			{
				temp=ar[i];
				ar[i]=ar[j];
				ar[j]=temp;
				i=-1;
			}
		}
	}
	ar=br
	document.write("ascending "+ar);

	var but2=document.createElement("button");
	document.body.appendChild(but2);
	but2.innerHTML="descending";
	but2. onclick=function()
	{
		doop=ar.reverse();
		document.write(doop);
		
		var but3=document.createElement("button");
		document.body.appendChild(but3);
		but3.innerHTML="random";
		but3.onclick=function()
		{
			function rn(l)
			{
				var rnum=l*Math.random();
				return rnum;
			}
			var demo=[];
			for(i=0;i<ar.length;i++)
			{
				z=parseInt(rn(ar.length))
				demo.push(ar[z]);
			}
			document.write(demo);
		}
	}
}

/*ar=[6,4,3,5,2,1]
function rn(l)
{
	var gn=l*Math.random();
	return gn;	
}
l=ar.length;
document.write(parseInt(rn(l)));*/