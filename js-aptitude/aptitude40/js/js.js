var buys=parseInt(prompt("Enter buying price"));
var sell=parseInt(prompt("Enter selling price "));
var after_buying=parseInt(prompt("Enter after year buying price"));
var after_selling=parseInt(prompt("Enter selling price "));
var cp=after_buying+buys;
var sp=after_selling+sell;
var profit=sp-cp;
var profit_percentage=(profit/cp)*100;
alert(profit_percentage);