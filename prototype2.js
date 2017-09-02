function DOG(name)
{
  this.name = name;
} 這是非通用物件

DOG.prototype = { species : '犬科' };
這是通用物件 例如新函數物件都具有'犬科'屬性
因為'犬科'屬性是通用的 所以不寫在原型函數內
用 原型函數名稱.prototype = {這裡來放通用物件}

　　var dogA = new DOG('大毛');
　　var dogB = new DOG('二毛');
一樣產生兩個新函數物件

DOG.prototype.species='死狗科';
修改通用屬性變成'死狗科'

console.log(dogA.name,dogA.species); // 犬科
console.log(dogB.name,dogB.species); // 犬科
