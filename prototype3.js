//                .toString()
function Person(name,age)
{
  this.name =name;
  this.age=age;
}  這是一個物件原型函數
   內部的屬性都非通用

Person.prototype.showPerson=function()
{
  console.log(`姓名:${this.name} 年齡:${this.age}`);
} 這裡放要增加的通用方法
  通用方法會適用於等等new出來的每一個實例

var nick=new Person('Nick',18);
var mary=new Person('Mary',25);
 new出兩個實例 nick,mary
 有各自的名稱跟年齡屬性
 但共用showPerson()這個方法

nick.showPerson();
mary.showPerson();


const util = require('util');
console.log(util.inspect(nick,{showHidden:true,depth:null}));
'util.inspect()'可以回傳內部資訊 以字串顯示
//console.log(.toString());

累了 先知道到這樣 畢竟這是工具 不是理論
