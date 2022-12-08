//return string name of a number 


var input1=document.createElement("input");
document.body.appendChild(input1);
input1.setAttribute("id","put");
var but=document.createElement("button");
document.body.appendChild(but);
but.innerHTML="click";
but.onclick=function()
{
	var number=document.getElementById("put").value;
	while(number>0)
	{
		rem=number%10;
		switch(rem)
		{
			case 0:
			document.write("zero<br>")
			break;
			case 1:
			document.write("one<br>")
			break;
			case 2:
			document.write("two<br>")
			break;
			case 3:
			document.write("three<br>")
			break;
			case 4:
			document.write("four<br>")
			break;
			case 5:
			document.write("five<br>")
			break;
			case 6:
			document.write("six<br>")
			break;
			case 7:
			document.write("seven<br>")
			break;
			case 8:
			document.write("eight<br>")
			break;
			case 9:
			document.write("nine<br>")
			break;
			default:
			document.write("not valid digit")
		}
		number=(number-rem)/10;
	}
}