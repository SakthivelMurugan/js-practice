//hash pattern program


var n=prompt("enter no :")
var nn=n
for(i=0;i<n;i++)
{
    for(j=0;j<n;j++)
	{
        if(j>=nn-1)
		{
            document.write("#");
            if(j==n-1)
			{
				nn-=1;
			}
			else
			{
				nn=nn
			}
		}
		else
		{
			document.write(" ");
		}
	}
    document.write("<br>");
}

