var electricity_bill=parseInt(prompt("Enter electricity_bill count"));
var deducted=parseInt(prompt("Enter amout deducted"));
var to_pay=deducted-electricity_bill;
var bill=(deducted/to_pay)*100;
alert(bill);