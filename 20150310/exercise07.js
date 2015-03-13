function es07(){
	var num = Math.ceil(Math.random()*100);
	console.log(num);
	for(var i = 0; i <= num; i++)
		if(num > 40 && i%2 !== 0 && i>40)
			console.log(i);
}