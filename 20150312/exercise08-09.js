function Point2D(x, y){
	this.x = x;
	this.y = y;
}

function Edge(p1, p2){
	this.p1 = p1;
	this.p2 = p2;
}

Edge.prototype.length = function(){
	return Math.sqrt(Math.pow((thix.p2.x) - (thix.p1.x), 2) + Math.pow((thix.p2.y) - (thix.p1.y), 2));
};

function Triangle(e1, e2, e3){
	this.e1 = e1;
	this.e2 = e2;
	this.e3 = e3;
}

Triangle.prototype.perimeter = function(){
	return this.e1 + this.e2 + ehis.e3;
}

Triangle.prototype.area = function(){
	var p = this.perimeter;
	var a = this. e1;
	var b = this. e2;
	var c = this. e3;
	return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}



