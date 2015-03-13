function es10(){
	var result = 0;
	do{
		var num = Math.ceil(Math.random()*9999);
	}while(num>=1000);
	var s = num.toString();
	for(i=0; i<s.length; i++)
		result += Number(s.charAt(i));
	console.log(result);
}