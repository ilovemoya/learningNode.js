//要先require('util')才能使用util內的函數

const util = require('util');
console.log(util.inspect(util,{showHidden:true,
                               depth:null}));



util.inspect(Input,{})這個指令
能把Input的詳細資訊顯示出來
{}的內部先這樣打{showHidden:true,depth:null}
showHidden:true  比較詳細
showHidden:false 比較不詳細

這種指令學都學不完@_@
