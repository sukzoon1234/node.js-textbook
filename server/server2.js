const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
	try {
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
		const data = await fs.readFile('./server2.html');
		res.end(data);
	} catch (err) {
		console.error(err);
		res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
		res.end(err.message); 
	}
}).listen(3000);
server.on('listening', () => {
	console.log('3000번 포트에서 서버 대기중');
});
server.on('error', (error) => {
	console.error(error);
});