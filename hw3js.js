const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login){
	let result;
	let length = login.length;
	if(length >= 4 && length <= 16){
		result = true;
	}else(result = false);
	return result;
};

const isLoginUnique = function(allLogins, login){
	let result;
	let length = allLogins.length;
	for(let i=0; i<length;i++){
		if(allLogins[i]===login){
			result = false;
			break;
		}else{result = true;
			break;};
	};
	return result;
};

const addLogin = function(logins,login){
	const valid = isLoginValid(login);
	let unique;
	if(valid === true ){
		 unique = isLoginUnique(logins,login);
	}else{console.log('Ошибка! Логин должен быть от 4 до 16 символов');
			return};
	if(unique === true){
		logins.push(login);
		console.log('Логин успешно добавлен');
	}else{console.log('Такой логин уже используется!')};}

