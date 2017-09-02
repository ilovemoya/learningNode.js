var name=0;
exports.setName=function(inputName)   //exports.可讓.後面的函數 讓文件外的程式碼呼叫
        {                             //setName函數被包裝成一種物件
            name=inputName;
            return name;            //就是把輸入放進變數name中
        };
exports.sayHello=function()               //exports.可讓.後面的函數 讓文件外的程式碼呼叫
        {                                 //setHello函數也被包裝成一種物件
            console.log("你好 " + name);
            return name  //顯示name的資料
        };

//定義js就是一種文件
//此文件結束 之後getmodule.js會呼叫這個文件
//這文件內的程式碼都會被執行 無意義的程式碼別亂打
