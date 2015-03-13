function es10(num){
	var result = 0;
	var s = num.toString();
	for(i=0; i<s.length; i++)
		result += Number(s.charAt(i));
	return result;
}

function es11(){
	do{
		var num = Math.ceil(Math.random()*9999);
	}while(num>=1000);
	do{
		num = es10(num);
	}while(num/10 > 1);
	console.log(r);
}