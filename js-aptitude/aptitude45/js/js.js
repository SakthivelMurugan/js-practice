var sellprofit=prompt("Enter sellprofit");
sellprofit=parseInt(sellprofit);
var costprofit=prompt("Enter costprofit");
costprofit=parseFloat(costprofit);
var profit=sellprofit-costprofit;
profit_percentage=(profit/costprofit)*100;
alert(profit_percentage);