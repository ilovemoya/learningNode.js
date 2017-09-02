/*
以下是說明 不是程式碼本身 @_@
require('./index.js') 本身就變是一個物件名稱
這個物件就是代表index.js 裡面的 module.exports 物件
每一個js檔 都有一個自己的module.exports 物件

require('./index.js').function() 就會呼叫此物件下的function函數
想像從index.js 的 module.exports 窗口抽屜裡拿出裡面的物件使用
所以在index.js 裡 要先把準備外部呼叫的物件放進 module.exports 窗口抽屜
module.exports 和 require() 的連動詳細機制目前還不清楚
也不知道是如何被封裝的 因為是node的底層機制

不過 require() 會把'index.js' 裡面的程式碼都先執行過一次
這點要特別注意!!! 也許以後會有一些意想不到的錯誤發生!!!

var outsideOBJ=require('./index.js')
就是宣告一個變數代表index.js 的窗口抽屜
outsideOBJ.function()就能在外部js檔呼叫此函數
*/

var userperson=function(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
};

//參數為屬性設定值 用函數的特性放進個物件屬性
var userperson01 = new userperson("Sally","Rally",48,"green");
var userperson02 = new userperson("fdgg","gfhg",48,"aaaaa");
console.log(userperson01);
console.log(userperson02);
