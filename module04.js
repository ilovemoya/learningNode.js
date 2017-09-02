var out=require('./module03.js');

var juy01=new out.AMF(-515,178);
var juy02=new out.AMF(2,178);
var juy03=new out.AMF(15,15);
var juy04=new out.AMF(0.00001,100000);

console.log(juy01);
console.log(juy02);
console.log(juy03);
console.log(juy04);

console.log(juy01.Add());
console.log(juy02.Add());
console.log(juy03.Add());
console.log(juy04.Add());

console.log(juy01.Mul());
console.log(juy02.Mul());
console.log(juy03.Mul());
console.log(juy04.Mul());
