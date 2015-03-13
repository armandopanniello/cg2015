function es12(){
	var n1 = Math.round(Math.random()*100);
	var n2 = Math.round(Math.random()*100);
	console.log(n1);
	console.log("*****");
	console.log(n2);
	min = n1;
	if(n2<n1)
		min = n2;
	for(i=2; i<=min; i++)
		if(n1%i === 0 && n2%i === 0)
			return i;
	console.log("Non esistono mcm");
}

