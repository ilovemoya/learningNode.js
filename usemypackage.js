/*
載入somepackage資料夾下的東西
細節我不是很清楚
總之這裡就能使用外部文件的函數
*/
const myapp=require('./my20170901package');
//引入模組資料夾
//Node.js會自動去找package.json檔
//然後依據裡面的"main"提供的路徑
//去找到模組程式碼
//這裡就能執行那些程式碼

myapp.sayHello();
myapp.sayHelloTwice();
myapp.eatLunch();
myapp.eatDinner();
