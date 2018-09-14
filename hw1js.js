'use strict'

const login_text = "Введите логин";
const password_text = "Введите пароль";
const cancel_text = "Отменено пользователем!";
const restricted_text = "Доступ запрещен";
const adminName = "adminLogin";
const adminPassword = "test";

let login = prompt(login_text);

let password;
if(login === adminName){ 
	password = prompt(password_text);
		if(password === null){
			alert(cancel_text);
	}
		else if (password !== adminPassword){
			alert(restricted_text);
	}
		else if (password === adminPassword){ 
			alert("Welcome!")
	}
	else{
	console.log("Error in if/else (password)")
	};
}
else if (login !== adminName){
	alert(restricted_text);
}
else if (login === null){
	alert(cancel_text);
}
else{
	console.log("Error in if/else (login)")
};

//доп задание .

const sharm = 15;
const hurgada = 25;
const taba = 6;
let rightNumber;
let compliance;
let trueGroup;
let numberSeats = +prompt('Введите число необходимых мест');

if(numberSeats % 2 === 0 && numberSeats > 0){
	 rightNumber = numberSeats;
} else {
	alert('Ошибка ввода')
}; 
if(rightNumber<=taba){
	compliance = confirm('Есть место в группе taba .Вы согласны быть в этой группе?');
	trueGroup = 'taba';
} else if (rightNumber > taba && rightNumber <=sharm){
	compliance = confirm('Есть место в группе sharm.Вы согласны быть в этой группе?');
	trueGroup = 'sharm';
} else if (rightNumber > sharm && rightNumber <= hurgada){
	compliance = confirm('Есть место в группе hurgada.Вы согласны быть в этой группе?');
	trueGroup = 'hurgada';
} else (alert("Так много мест нет"));

 if(compliance){
 	alert(`Приятного путешествия в группе ${trueGroup}`)
 } else 
 (alert('Нам очень жаль, приходите еще!'));





