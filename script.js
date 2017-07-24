function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};

Phone.prototype.printInfo = function() {
	console.log('The phone brand is: ', this.brand, ', color is: ', this.color, ', price: ', this.price, '$'
	, ', Extend warranty: ', this.getWarrantyCost(),'$');
};

Phone.prototype.getWarrantyCost = function() {
	return this.price * 0.1;
}

var iPhone6S = new Phone("Apple", 2250, "silver");
iPhone6S.printInfo();
var GalaxyS6 = new Phone("Samsung", 3500, "grey");
GalaxyS6.printInfo();
var One = new Phone("OnePlus", 2000, "black");
One.printInfo();