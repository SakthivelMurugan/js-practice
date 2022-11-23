var apq=prompt("enter avg monthly income of p and q");
var aqr=prompt("enter avg monthly income of q and r");
var apr=prompt("enter avg monthly income of p and r");
apq=parseFloat(apq);
aqr=parseFloat(aqr);
apr=parseFloat(apr);
var p=((apq*2+aqr*2+apr*2)/2)-(aqr*2);
alert(p);