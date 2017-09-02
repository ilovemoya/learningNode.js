函數的兩種宣告方式 = = 哀 好端端的搞出兩種方式折磨人?
function PersonKindWTF(personName,personAge,personLike)  //第一種物件宣告方式
         {
                this.wordInput= personName;
                this.numberInput = personAge;
                this.thingInput = personLike;
         };


var PersonKind002=function(personName,personAge,personLike)  //第二種物件宣告方式
         {
                this.wordInput= personName;
                this.numberInput = personAge;
                this.thingInput = personLike;
         };

console.log (PersonKindWTF.toString());
console.log (PersonKind002.toString());

var user001 = new PersonKindWTF("John",82,"apple");
console.log (user001);
var user002 = new PersonKind002("Mary",16,"sex");
console.log (user002);
console.log ("結論:兩種宣告模式都差不多");
