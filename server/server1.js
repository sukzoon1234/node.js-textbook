const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	res.write('<h1>Hello Node!</h1>');
	res.write('<p>Hello server</p>');
	res.end('<p>Hello Seokjun</p>');
})
	.listen(3000);

server.on('listening', () => {
	console.log('3000번 포트에서 서버 대기중');
});
server.on('error', (error) => {
	console.error(error);
});