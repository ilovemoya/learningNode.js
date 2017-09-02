//console.log(.toString());
function myBaseObject(){};

myBaseObject.prototype.hit=function()
{   /*物件原型myBaseObject新增了一個hit方法*/
  console.log(`呼叫通用方法成功!`);
}
var obj = new myBaseObject();
//obj.hit(); //呼叫成功 廢話!

var myChildObject=function(){};
var obj02 = new myChildObject();
//obj02.hit(); //此行程式碼會產生錯誤
//這裡myChildObject還沒繼承到myBaseObject的hit
//所以即使new出一個myChildObject的實例obj02
//obj02內沒有hit方法 呼叫失敗

const util = require('util');
util.inherits(myChildObject,myBaseObject);
//語法是這樣 util.inherits(繼承,被繼承);
//myChildObject會繼承myBaseObject.prototype內的物件
//myBaseObject.prototype裡面有hit函數
//所以myChildObject的實例obj02內就有hit函數能呼叫
obj02.hit(); //呼叫成功
