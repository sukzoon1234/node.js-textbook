const test = (bool) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(bool) {
				resolve("fulfilled 상태. then으로 연결.");
			} else{
				reject("reject 상태. catch로 연결.");
			}
		}, 1000);
	});
}

test(true)
	.then((result) => {
		console.log(result);
		return test(false);
	})
	.catch((err) => {
		console.log(err);
	})