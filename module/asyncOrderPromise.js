const fs = require('fs').promises;

console.log('시작');
fs.readFile('./readme.txt')
	.then((data) => {
		console.log('1번', data.toString());
		return fs.readFile('./readme.txt');
	})
	.then((data) => {
		console.log('2번', data.toString());
		return fs.readFile('./readme.txt');
	})
	.then((data) => {
		console.log('3번', data.toString());
		return fs.readFile('./readme.txt');
	})
	.then((data) => {
		console.log('4번', data.toString());
		return fs.readFile('./readme.txt');
	})
	.catch((err) => {
		if(err) {
			throw err;
		}
	});