//create array with duplicate elements
var a=[3,2,1,4,5,6,7]
var b=[]
for(i=0;i<=a.length;i++)
{
	b.push(a[i],a[i]);
	console.log(b);
	
}
document.write(b);