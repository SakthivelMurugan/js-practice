//date buildin method in js

var ob=new Date()
document.write(ob+"<br>")

var x=new Date(["2002,feb,28","9:33:22"]);
document.write(x+"<br>");

var x=new Date(["2021,february,29","9:33:22"]);
document.write(x+"<br>");

var x=new Date(["2002,01,31","9:33:22"]);
document.write(x+"<br>");

var x=new Date("2002,01,31 9:33:22");
document.write(x+"<br>");

var x=new Date("2002-01-31 9:33:22");
document.write(x+"<br>");

var x=new Date("2000","04","25");
document.write(x+"<br>");

var x=new Date("2000","04","25","9","30","25");
x.setDate("27");
document.write(x+"<br>");

var ob=new Date()
document.write(ob.getMilliseconds()+"<br>")

x=new Date();
document.write(x.getDay());



