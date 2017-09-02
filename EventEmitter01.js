//這個城市有點花俏...
const util = require('util');
const events = require('events');
//先引入這兩個套件

function MyObject(){this.count=0;}
//宣告一個函數原型物件 內有一個負責計數的變數 count

util.inherits(MyObject,events.EventEmitter);
//讓MyObject原型物件繼承events.EventEmitter的通用函數
//所以MyObject可以用on() emit()這些函數

MyObject.prototype.touch=function()
{
  this.count=this.count+1;
  this.emit('touched',this.count);
} //定義MyObjec裡的通用函數touch()

var myObj=new MyObject();
//myObj是一個MyObject實例

myObj.on('touched',function(count){console.log(`Object was touched ${count} time`);});
//on函數的功能是只要偵測到emit發送參數'touched'
//就執行後面那個參數函數 後面那個參數函數沒有名稱...
//真是花俏(隨便?) 這個參數函數會把計數的變數 count
//搭配說明字串一起顯示出來 Object was touched time 就是說明字串
//只要 emit發送'touched'一次  整串文字就顯示一次

for(var i=1;i<=2;i=i+1){
myObj.touch();
}
//呼叫touch()
//計數的變數 count會+1 函後發送"touched"讓 on()接收
//接著把計數的變數 count 當成參數送進 on()後面的參數函數
//就是上面提到的那個沒有名字的參數函數
//之後會執行參數內的console.log()指令



//console.log(util.inspect(myObj.touch,{showHidden:1,depth:null}));
