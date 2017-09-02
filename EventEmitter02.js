var events=require('events');
var util=require('util');

//events.EventEmitter()是原型函數
//來看看這個原型函數長怎樣   .toString()
//console.log(events.EventEmitter);
//很好 看不懂 總之就是一個事件觸發的原型函數

var event = new events.EventEmitter();
//emitter是一個events.EventEmitter()的實例
//可以執行events.EventEmitter內的方法
//events.EventEmitter內有一個方法 on 格式如下
//events.EventEmitter.on(事件字串,回呼函數)
event.on('someEvent',function(arg1,arg2){
  console.log('listener1',arg1,arg2);
});
event.on('someEvent',function(arg1,arg2){
  console.log('listener2',arg1,arg2);
});
//已經設定好兩個event.on函數
//正在等待event.emit發送來的訊息
event.emit('someEvent','Tom','2017');
/*
on() emit()兩個函數相互搭配
on("字串關鍵字",emit接收到"字串關鍵字"後執行的函數)
emit("字串關鍵字",這裡開始放on()裡面等待執行的函數的參數)
*/
