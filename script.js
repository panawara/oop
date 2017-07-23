function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");

iPhone6S.printInfo();

var GalaxyS6 = new Phone("Samsung", 3500, "black");

GalaxyS6.printInfo();

var One = new Phone("OnePlus", 2000, "gray");

One.printInfo();