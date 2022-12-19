var da=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
var vd=String(prompt("enter Date in this format [yyyy,mm,dd] :"));
var od=new Date(vd);
var day=od.getDay();
if(day>=1&&day<=5)
{
	document.write(da[day]+" is working day")
}
else
{
	document.write(da[day]+" is holiday")
}

