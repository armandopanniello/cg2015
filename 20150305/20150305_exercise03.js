var s = "";
for(i=1;i<=10;i++){
	s = ""
	for(j=1;j<=10;j++){
		if (j===i) 
			s += 1 + ", ";
		else 
			s += 0 + ", ";
	}
	console.log(s);
}