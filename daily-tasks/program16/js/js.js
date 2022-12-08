//remove pair elements in Array


function fname(l)
{
	var i=0;
	var j=i+1;
	while(i<l.length-1)
	{
		while(j<l.length)
		{
			while(l[i]==l[j])
			{
				
				//l.splice(i, 1);
				l.splice(j,1);
				//l.splice(j-1, 1);
				l.splice(i,1);
				i=0;
				j=i+1;
			}
			j+=1;
		}
		i+=1;
		j=i+1;
	}
	console.log(l);
	console.log(l.length);
}
var n=prompt("enter the no of items");
n=parseInt(n);
var a=[];
while(a.length < n){
	var j=prompt("enter item");
	a.push(j);
}
fname(a);
