//架設一個簡單的伺服器在 http://127.0.0.1:3000
//詳細機制不清楚 因為不是我打的

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
  console.log("Server running at http://"+hostname+":"+port);
});
//兩個console.log()的輸出一樣
/*
${}可以在`字串`內 兩邊用``包起來 Esc鍵左下面那顆
把變數名稱直接當成變數使用 真的是在聰明啦
有個上面那行就不用寫成下面那行的樣子 一堆 + 跟 "
*/
