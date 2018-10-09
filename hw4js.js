const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

const Cashier = function(name,productBase){
	this.name = name;
	this.productBase = productBase;
	let customerMoney = 0;
	this.customerMoney = customerMoney;
	this.getCustomerMoney = function(value){
		this.customerMoney = value;
	};
	this.countTotalPrice = function(order){
		let price = 0;
		for(key in products){
			for(kay in order){
				if(key === kay)
					{let pam = products[key]* order[kay]; price += pam; }
}}return price};
	this.countChange = function(totalPrice){
		let result;
		if(this.customerMoney > totalPrice){result = this.customerMoney - totalPrice}
	else{result = null};
		return result;
};
	this.onSuccess = function(change){`Спасибо за покупку, ваша сдача ${change}!`};
	this.onError = function(){'Очень жаль, вам не хватает денег на покупки'};
	this.reset = function(){this.customerMoney = 0};
			
};



