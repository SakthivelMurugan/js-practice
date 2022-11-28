var cp=100;
var mp=prompt("enter the mp");
mp=parseInt(mp);
var mp=cp*(mp+cp)/cp;
var gp=prompt("enter the gp");
gp=parseInt(gp);
var sp=(100+gp)/100*cp;
var dp=(mp-sp)*cp/mp;
alert(dp);