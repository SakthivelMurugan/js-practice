ar=[]
function add(ob)
{	
	j=0;
	for(let i in ar)
	{
		if(ar[i]["id"]==ob["id"])
		{
			ar[i]["quantity"]+=ob["quantity"]
			j++;
		}
	}
	if(j==0)
	{	
		ar.push(ob)
	}
	console.log(ar)
}
function edit(ob)
{
	for(let i in ar)
	{
		if(ar[i]["id"]==ob["id"])
		{
			ar[i]["quantity"]=ob["quantity"]
		}
	}
	console.log(ar)
}
function remove(ob)
{
	for(let i in ar)
	{
		if(ar[i]["id"]==ob["id"])
		{
			ar.splice(i,1)
		}
	}
	console.log(ar)
}
add({"id":1,"quantity":1})
add({"id":2,"quantity":1})

edit({"id":1,"quantity":3})


add({"id":2,"quantity":3})

remove({"id":1,"quantity":3})


