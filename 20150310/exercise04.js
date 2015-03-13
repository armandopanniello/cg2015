var data = [
			{maglia : '1', name : 'narciso'},
			{maglia : '2', name : 'agostinone'},
			{maglia : '3', name : 'potenza'},
			{maglia : '4', name : 'quinto'},
			{maglia : '5', name : 'gigliotti'},
			{maglia : '6', name : 'bencivenga'},
			{maglia : '7', name : 'minotti'},
			{maglia : '8', name : 'agnelli'},
			{maglia : '9', name : 'iemmello'},
			{maglia : '10', name : 'cavallaro'},
			{maglia : '11', name : 'sarno'},
			];

var key = 'name';

var values = ["cavallaro", "iemmello", "sarno"];

function contained(item){
	var i;
	for(i = 0; i < values.length; i++)
		if(values[i]===item[key])
			return true;
	return false;
}

function select(data, key, values){
	return data.filter(contained);
}


