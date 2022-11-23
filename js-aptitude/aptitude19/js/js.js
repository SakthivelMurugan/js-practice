var purchase=parseFloat(prompt("enter tv purchase price"));
var sellingloss=parseFloat(prompt("enter selling loss percentage"));
selprice=parseFloat();
selprice=purchase-(purchase*sellingloss/100);
alert(selprice);