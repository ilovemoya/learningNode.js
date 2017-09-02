var http = require("http");
/*
//宣告一個變數 代表"宣告一個函數以及設定函數內容"
var setVariableAsFunction=function(req,res){
                            res.writeHead(200,{"Comtent-Type":"text/html"});
                            res.write("<h1>Node.js</h1>");
                            res.end("<p>Hello</p>");
                          };
http.createServer( setVariableAsFunction ).listen(3000);
*/

// 架一個伺服器 使用createServer函數
http.createServer(  function(req,res){
                                      res.writeHead(200,{"Comtent-Type":"text/html"});
                                      res.write("<h1>Node.js</h1>");
                                      res.end("<p>Hello</p>");
                    }
                 ).listen(3000);


console.log("HTTP成功監聽prot:3000");
