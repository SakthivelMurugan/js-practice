var candidate1=parseFloat(prompt("enter received votes of person1"));
var candidate2=parseFloat(prompt("enter received votes of person2"));
var candidate3=parseFloat(prompt("enter received votes of person3"));
var percentage=parseFloat();
if(candidate1>candidate2)
{
	if(candidate1>candidate3)
	{
		percentage=candidate1*100/(candidate1+candidate2+candidate3);
	}
}
if(candidate2>candidate1)
{
	if(candidate2>candidate3)
	{
		percentage=candidate2*100/(candidate1+candidate2+candidate3);
	}
}

if(candidate3>candidate1)
{
	if(candidate3>candidate2)
	{
		percentage=candidate3*100/(candidate1+candidate2+candidate3);
	}
}
alert(percentage);