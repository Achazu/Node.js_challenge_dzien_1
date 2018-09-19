//Twój kod

const input = process.argv;

const array = input.slice(2, input.length);

array.forEach((num) => {
	setTimeout(() => {

		console.log(`${num}`);

	}, num*1000);
	
});