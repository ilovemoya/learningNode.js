var myModule=require("./004-module");      //require("./檔案名稱")
var myModule02=require("./004-module");    //呼叫該檔案內的內容

//宣告變數就等於創造一個物件 物件屬性跟方法就是在require呼叫的那個檔案內
//例如var myModule=require("./004-module") 就是創造一個新物件
//myModule就是新物件的名稱 裡面有.setName .sayHello等函數
//exports.setName的exports代表該函數能被外部文件使用
//使用時用宣告的物件名稱取代exports
    myModule02.setName("TOM")
    console.log(myModule02.setName("SAM"));
    myModule02.sayHello();
  //  myModule.setName("Toooom");
  //  myModule.sayHello();
  //  myModule02.setName("SaaaaaM");
  //  myModule.sayHello();
