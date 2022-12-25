//copywithin,entries,flatMap,forEach,from,group,groupToMap,keys,lastIndexOf,valueOf,toString
//at - returns the item at that index
var x = ["aee","bee","cee","dee","eee"];
var y = x.at(-4) //4
console.log(y);


//concat - merge two or more arrays
var x = [1,2,3];
var y = [4,5,6];
var z = ['a','b','c'];
var m = x.concat(y);
var n = x.concat(y,z);
console.log(m);
console.log(n);


//every - it will return true only if the condition satisfy
let age = [23,45,78,13,29]; 
var x = age.every(function(value)
{
	return value>=10
});
console.log(x);


//fill - it fills specifiefd element in a array with a value
var x = ['sa','re','ga','ma','pa'] //value,start,end
//var y = x.fill("dd")
var z = x.fill("dd",2,4)
//console.log(y);
console.log(z);


//filter - it will check the array and it will give what we wanted
let a = [23,45,78,13,29];
var x = a.filter(function(value)
{
	return value>=25
});
console.log(x);


//find - return the value of first element that passes the test
var num = [11,17,22,13,54,15,66,27,38,9];
let even = num.find(function(value)
{
	return value%2==0
});
console.log(even)


//findIndex - return the index value of first element that passes the test
var num = [11,17,12,3,4,5,6,7,8,9];
let e = num.findIndex(function(value)
{
	return value %2==0
});
console.log(e)


//findLast - return the value of last element that passes the test
var num = [11,17,22,13,54,15,66,27,38,9];
let no = num.findLast(function(value)
{
	return value%2==0
});
console.log(no)


//findLastIndex - return the index value of last element that passes the test
var num = [11,17,22,13,54,15,66,27,39,9];
let s = num.findLastIndex(function(value)
{
	return value%2==0
});
console.log(s)


//flat - to reduce the nesting of an array
var d = [1,2,[3,4,[5,6,7,[8,9]]]]
var q = d.flat(Infinity) //flat(),flat(2),flat(Infinity)
console.log(q);


//includes - it return true if an array contain specified element else return false
var t = ["aee","bee","cee","dee","eee"]; //value,start
var r = t.includes("cee")
var d = t.includes("bee","cee")
console.log(r);
console.log('hello',d);


//indexOf - returns the position of a specified value in an array.
var o = ['cat','dog','goat','lion','tiger','dog']; //item,start
var p = o.indexOf("dog");
var j = o.indexOf("dog",2);
console.log(p);
console.log(j);


//isArray - returns true if a datatype is an array, otherwise false
var l = [11,17,22,13,54,15,66,27,39,9];
var b = Array.isArray(l)
console.log(b);


//join - returns an array as a string. //seperator is optional
var b = ['cat','dog','goat','lion','tiger'];
var l = b.join();
var v = b.join(" and "); //-
console.log(l);
console.log(v);
 
//map - new array from calling a function for every array element. 
var k = [1,2,3,4,5,6,7];
var h = k.map(function(value)
{
	return value*5;
});
console.log(h);


//push - add one or more element at the end of the array and return length
var m = [1,2,3,4,5,8];
var u = m.push(9); // m.push(9)
console.log(u);  // console.log(m)


//pop - remove the last element frm array and return the removed element
var zz = [1,2,3,4,5,8];
var uu = zz.pop(); 
console.log(uu); 


//shift - method removes the first item of an array and return the removed element
var aa = ["cat","goat","zebra","donkey","buffaloo"];
var bb = aa.shift()
console.log(bb)


//unshift - add one or more element at the begining of the array and return length
var ae = ["cat","goat","zebra","donkey","buffaloo"];
be = ae.unshift("camel")
console.log(be)//console.log(ae)


//reduce - 
var salary = [9000,5234,14456,6576,9876];
var total = salary.reduce(function(previousVal,currentVal)
{
	return previousVal+currentVal;
	
})
console.log(total)


//reduceRight
var salaryy = [9700,5234,14456,6576,9879];
var totall = salaryy.reduceRight(function(previousVal,currentVal)
{
	return previousVal+currentVal;
})
console.log(totall)


//reverse - it reverse the order of the element of an array
var gg = [66,45,93,78,34];
var hh = gg.reverse()
console.log(hh);


//slice - return selected element in an array as a new array
var pp = ['cat','dog','goat','lion','tiger']; //start,end
var tt = pp.slice(2)
var dd = pp.slice(1,4)
console.log(tt);
console.log(dd);


//splice - adds and/or removes array elements. 
var jj = ["carrot","tomato","beetroot","raddish","onion"]; //index,howmany,item1...itemn
var kk =  jj.splice(4,1,"brinjal")
console.log(kk)


var jj = ["carrot","tomato","beetroot","raddish","onion"]; //index,howmany,item1...itemn
var kk =  jj.splice(5,1,"brinjal")
console.log(kk)


var kl = ["carrot","tomato","beetroot","raddish","onion"];
lk = kl.splice(2,2)
console.log(lk)


//sort - sorts the elements of an array.
var rr = ['crow','piegion','duck','parrot','dove'];
var uu = rr.sort()
console.log(uu);


//some - atleast one element satisfy the condition it will return true
let ax = [23,45,78,13,29];
var xa = ax.some(function(value)
{
	return value>=25
});
console.log(xa);

//sort 
let zzz = [23,45,78,13,29];
var aaa=zzz.sort((a,b)=>a-b);
console.log(aaa);

//array.forEach()
var array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));


