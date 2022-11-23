var buys=parseFloat(prompt("enter good worth"));
var rebate=parseFloat(prompt("enter rebate percentage"));
var salestax=parseFloat(prompt("enter salestax"));
payamout=parseFloat();
payamout=(buys-(buys*rebate/100))+((buys-(buys*rebate/100))*salestax/100);
alert(payamout);
