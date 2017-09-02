//.toString()
function dog(name,age)
   {
     this.name = name;
     this.age=age
   }
這是一個狗的原型函數
功能是將輸入的參數變成狗個名字跟年齡
因為等等要用new去產生新函數物件
所以這個this 等等就代表新設定的物件名稱

var dogA=new dog('Sam',144);
var dogB=new dog('Tom',777);
var dogC=new dog('Mary',569);
宣告三個名稱 並用new讓他們變成函數物件
函數物件的功能跟狗原型函數一樣
並且各自設定初始值

console.log(dogA.name,dogA.age);
console.log(dogB.name,dogB.age);
console.log(dogC.name,dogC.age);
