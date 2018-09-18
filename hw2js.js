const numbers = [];
let userInput;
let total = 0;

do{
	userInput = +prompt('Введите число',0);
	if(userInput !== null){
		numbers.push(userInput);
	}else (userInput = false);
}
while(userInput);
for(let el of numbers){
	total += el;
	console.log(total)
};

if(total !== 0){
	alert(`Общая сумма чисел равна ${total}`)
}else{alert('Вы не ввели числа')};

