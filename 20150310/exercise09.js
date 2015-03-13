function es09(){
	n = Math.ceil(Math.random()*100);
	console.log("Numero che verranno estratti: " + n);
	var max = 0;
	for(var i = 0; i <= n; i++){
		var a = Math.ceil(Math.random()*100);
		console.log("Numero Estratto: " + a);
		if(a >= max)
			max = a;
	}
	console.log(max);
}