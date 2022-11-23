var buys=parseFloat(prompt("enter buying price"));
var repairs=parseFloat(prompt("enter repair fee"));
var sells=parseFloat(prompt("enter selling price"));
gainper=(sells-(buys+repairs))*100/(buys+repairs);
gainper=parseFloat(gainper);
alert(gainper);

