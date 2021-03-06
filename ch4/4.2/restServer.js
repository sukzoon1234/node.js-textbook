const http = require('http');
const fs = require('fs').promises;

const users = {}; // 데이터 저장용

http.createServer(async (req, res) => {
	try {
		console.log(req.method, req.url);
		if (req.method === 'GET') {
			if (req.url === '/') {
				const data = await fs.readFile('./restFront.html');
				res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
				return res.end(data);
			} else if (req.url === '/about') {
				const data = await fs.readFile('./about.html');
				res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
				return res.end(data);
			} else if (req.url === '/users') {
				res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
				return res.end(JSON.stringify(users));
			}
			//주소가 /도 /about도 /users도 아니라면??
			try {
				const data = await fs.readFile(`./${req.url}`);
				return res.end(data);
			} catch (err) {
				//주소에 해당하는 라우트를 못 찾았다는 404 not found error 발생
			}
		} else if (req.method === 'POST') {
			
		} else if (req.method === 'PUT') {
			
		} else if (req.method === 'DELETE') {
			
		}
		res.writeHead(404);
		return res.end('NOT FOUND');
	} catch (err) {
		console.error(err);
		res.writeHead(500, { 'Content-Type': 'text/plain; cahrset=utf-8'});
		res.end(err.message);
	}
})
	.listen(3000, () => {
		console.log('3000번 포트에서 서버 대기중입니다');
	});