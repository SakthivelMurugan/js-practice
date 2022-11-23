var ahwc=prompt("enter average value of husband,wife and their child");
var ybahwc=prompt("enter how many year before");
var awc=prompt("enter average value of wife and their child");
var ybawc=prompt("enter how many year before");
ahwc=parseInt(ahwc);
ybahwc=parseInt(ybahwc);
awc=parseInt(awc);
ybawc=parseInt(ybawc);
var h=(ahwc*3+3*(ybahwc))-(awc*2+2*(ybawc));
alert(h);

