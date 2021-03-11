const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '내가 글을 쓴다aaaa!')
	.then(() => {
		return fs.readFile('./writeme.txt');
	})
	.then((data) => {
		console.log(data);	
	})
	.catch((err) => {
		console.error(err)
	});