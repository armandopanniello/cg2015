var a = []

function es01a(n){
	var i;
	for(i = 1; i <= n; i++)
		a.push(i);
	return a;	
}

function es01b(item){
	return (item % 2 === 0);
}

function es01c(item){
	return item*2;
}

function es01d(item){
	return (item % 4 === 0);
}

function es01e(prev, curr){
	return prev + curr;	
}

var result = es01a(10).
   filter(es01b).
   map(es01c).
   filter(es01d).
   reduce(es01e);

   result; //60