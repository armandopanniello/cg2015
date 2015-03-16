/*implement the following Bingo object. 
The Bingo object should randomize a number between 1 and 10 
on creation and provide a single method guess(number). 
That method should return true if the argument was the secret number. Test your class.*/

function Bingo(){
	this.number = Math.round(Math.random()*10);
	this.guess = function(number){
		return this.number === number;
	}
}