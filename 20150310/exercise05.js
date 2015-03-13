var a = [];

function f(prev, curr){
	return prev < curr;
}

function es05(){
	var i;
	for (i=0; i<3;i++)
		a.push(Math.ceil(Math.random()*100));	
	return a.sort(f)[0];
}