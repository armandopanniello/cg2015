function es08(){
	var i;
	var num = Math.ceil(Math.random()*100);
	console.log("Numero Random: "+num);
	if(num<40){
		for(i = 40; i >= num; i--)
			console.log(i);
	}
	else{
		for(i = 40; i <= num; i++)
			if(i%2!==0)
			console.log(i);
	}
}