var crt=parseFloat(prompt("enter crt value"));
var wrong=parseFloat(prompt("enter wrong value"));
var avgincreased=parseFloat(prompt("enter increased avg"));
pupils=(crt-wrong)/avgincreased;
if(pupils<0)
{
	pupils=-1*pupils
}
pupils=parseFloat(pupils);
alert(pupils);