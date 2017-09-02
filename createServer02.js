const http = require('http');
const util = require('util');

var server = http.createServer(
                               function(req,res){
                               console.log(req.url);
                               res.writeHead(200,{'Content-Type':'text/plain'});
                               res.end('Hey Guy!');
                               }
                              );
server.listen(3000,'127.0.0.1');
console.log('你正在監聽端口:3000');

/*另一種寫法
http.createServer(
                      function(req,res){
                      res.writeHead(200,{'Content-Type':'text/plain'});
                      res.end('Hey Guy!');
                      }
                  ).listen(3000);
*/
//呼叫http.createServer().listen()這個函數
//listen函數的參數是3000 表示監聽port:3000
//http.createServer建立了一個http.Server的實例
//也就是說http.Server是一個原型
//http.createServer可能自帶有new的性質
//http.createServer()的參數為一個函數...這函數還有兩個參數
//這個函數也就是這個實例的設定值 @@ 原型通常設定輸入規則
//實例就依據原型的規則輸入參數來設定實例的值
//這裡的設定值就是一個函數 這個函數還有兩個物件參數
//分別是 請求物件:req 跟反應物件:res


//console.log(util.inspect(http.createServer,{showHidden:1,depth:null}));
