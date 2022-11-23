var one=parseFloat(prompt("enter one got percentage"));
var invalid=parseFloat(prompt("enter invalid votes percentage"));
var total=parseFloat(prompt("enter total number of votes"));
other=(total-(total*invalid/100))*(100-one)/100;
alert(other);