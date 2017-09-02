var AddandMulfunction=function(x,y){
                      this.resultAdd=x+y;
                      this.resultMul=x*y;
                      };
//上面這行是大家都有自己的functionAdd
//但是明明就是一樣的東西 可以共用!!!!
/*
add.prototype.KOfunctionAdd=function(){
                           return this.resultAdd;
                          };
add.prototype.KOfunctionMul=function(){
                           return this.resultMul;
                          };
*/
//放到add.prototype物件內的任何物件 都是add的通用物件
//只要是new出add的實例 都能共用這些物件
//放置的寫法有兩種 不過上面那種似乎比較簡潔

//下面這種似乎有重複命名的問題
//也許以後學到C++或是Node.js的底層機制會知道為啥

var functionAdd=function(){
                           return this.resultAdd;
                          };
var functionMul=function(){
                           return this.resultMul;
                          };

AddandMulfunction.prototype={
                Add:functionAdd,
                Mul:functionMul,
              };

module.exports={AMF:AddandMulfunction};
//最後記得讓add能被外部文件呼叫
//呼叫時用Outadd這個名字呼叫
//一般人都設一樣比較方便
//但我覺得這是兩個不同的東西
//所以給他兩個名字
//這行很重要 因為外部呼叫是呼叫Outadd不是add

//底下是顯示一些物見底部資訊用函數
//console.log(module.exports.toString());
//const util = require('util');
//console.log(util.inspect(module.exports,{showHidden:true,depth:null}));
