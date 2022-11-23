var buys=parseFloat(prompt("enter cycle buying price"));
var sellingloss=parseFloat(prompt("enter loss percentage of selling"));
sellingprice=parseFloat();
sellingprice=buys-(buys*sellingloss/100);
alert(sellingprice);