var userNumber='i am learning node';
var cars = ["Saab", "Volvo", "BMW"];
var car = {type:"Fiat", model:"500", color:"white"};
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //其實這是一個陣列

///new出一個物件實例 並命名為person001
var person001 = new Object();
//增加4個person001的屬性並設定初始值
person001.firstName = "John";
person001.lastName = "Doe";
person001.age = 50;
person001.eyeColor = "blue";

var person002 = {
  firstName : "Tom" ,
  lastName : "Qoo",
  age : 99
};
person002.eyeColor = "White";
person002.age=79;
//這樣可以修改或增加屬性


//用函數設定物件原型 userperson是一個擁有物件屬性的函數
//userperson是一個規則設定函數 還不具有各屬性設定值
var userperson=function(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
};
//()內參數為屬性設定值
//依照userperson函數的規則設定屬性的值
var userperson01 = new userperson("Sally","Rally",48,"green");
var userperson02 = new userperson("fdgg","gfhg",48,"aaaaa");
//注意 這裡的new  是作用在userperson身上

var x=0909818098;  //增加module.exports物件內容 X=0
var car=["Saab", "Volvo", "BMW"];//增加一個陣列
var txt="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //增加一個字串


var callme=function(){
    console.log("呼叫函數成功");
};



module.exports={ y:x,
                acat:car,
                atxt:txt,
                acallme:callme
              };


//增加一個物件函數
var userperson=function(name,age){
    this.idname = name;
    this.age = age;
};
module.exports.x=5;
module.exports.auserperson=userperson;
//增加兩個新物件放進module.exports物件內

var add=function(x,y){
    this.result=x+y;
    return 100;
};
var uty=new add(5,6);

module.exports.outadd=add;
