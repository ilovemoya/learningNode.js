console.log(__dirname);   //顯示本文件路徑
console.log(__filename);  //顯示路徑和本文件名稱

function a(){
              console.log(a.toString());
            };
var b=function(){
                  console.log(b.toString());
                };
a();
console.log("以上印出a函數的內容");
console.log("------------------------------------------------");
b();
console.log("以上印出b函數的內容");
console.log("------------------------------------------------");
console.log("以下演示是可以把函數當參數送進另一個函數");
function callFunction(fun){
                            fun();   //傳a跑a(),傳b跑b()
                          }
callFunction(a);
console.log("會依據參數的去執行相對應的函數");
