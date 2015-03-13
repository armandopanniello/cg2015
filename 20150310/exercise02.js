var a = [];

function es02a(n){
	var i;
	for(i=0;i<n;i++)
		a.push(Math.ceil(Math.random()*100));
	return a;
}

function es02b(item){
	return (item % 2 !== 0);
}

function es02c(prev, curr){
	return prev > curr;
}

var result = es02a(10).
		filter(es02b).
		sort(es02c);

result;