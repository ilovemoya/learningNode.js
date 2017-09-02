const os = require('os');
//要先引入os模組才能用os模組內的函數等功能


console.log(os.cpus());
console.log(os.tmpdir());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime()/3600/24);//顯示開機幾天了XD 
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
