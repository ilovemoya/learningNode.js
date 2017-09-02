var BaseObject=function(name,age){
    this.name=name;
    this.age=age;
}; //宣告一個原型函數物件
BaseObject.prototype.hit=function()
{ console.log('呼叫成功!'); }
//宣告hit函數 放進BaseObject.prototype內
//hit函數變成BaseObject的通用函數

//new出一個BaseObject的實例
var obj = new BaseObject('Mary',18);
//console.log(obj); //非通用屬性已經被輸入的參數設定好
//obj.hit(); //通用函數hit()也正常運作

//再宣告一個新原型函數物件 叫ChildObject
var ChildObject=function(){};
//同樣new出一個實例
var obj2 = new ChildObject();
//console.log(obj2);
//因為沒有設定ChildObject的內部 所以是空物件
//obj2.hit(); //呼叫失敗
//因為沒有BaseObject的通用函數hit()

//node.js提供了一個新模組 util
const util = require('util');
//有個函數能讓通用函數讓別的原型函數物件使用
util.inherits(ChildObject,BaseObject);
console.log(BaseObject.prototype);
console.log(ChildObject.prototype);
//就是util.inherits()繼承函數
//(繼承函數物件,被繼承函數物件)
//console.log(obj2); //還是維持空的
//因為只有BaseObject.prototype下的函數會被繼承!!!
//obj2.hit(); //呼叫成功
//因為ChildObject已經繼承了BaseObject的hit
