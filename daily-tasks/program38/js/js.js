var ar=["jan","feb","mar","apr","may","jun","jul","aug","sept","oct","nov","dec"]

var cd=new Date();
cy=cd.getFullYear();
cm=cd.getMonth();
dc=cd.getDate();
document.write("current date :"+cy+"-"+ar[cm]+"-"+dc+"<br>");

var DOB=String(prompt("enter your Date of Birth in the order of year month and date separated by comma or hyphen symbol :"));
var dob=new Date(DOB);
by=dob.getFullYear();
bm=dob.getMonth();
db=dob.getDate();
document.write("date of birth :"+by+"-"+ar[bm]+"-"+db+"<br>");

var age=-1;
while(cy>=by)
{
	if(cy==by)
	{
		if(bm<cm||bm==cm&&db<=dc)
		{
			age++;
			by++;
		}
		else
		{
			by++;
		}
	}
	else
	{
		age++;
		by++;
	}
}
document.write("entered person age is :"+age);
