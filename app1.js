// javascript app / game 
/*    
GAME RULES


*/
//DOM manipulation
//1*Document
//2*Object
//3*Model

//DOM is a structured representation of an html document 
// is used to connect webpages to scripts like javascript

/******
 * Events
 * are Notifications that are sent to notify the code that something has happened
 * 
 * Event Listener:
 * A function that performs an action based on a certain event 
 * it awaits for a specific event to happen 
 * 
 * State variable:
 * simply tells us the definition of an event
 * 
 * //document.querySelector('#current-' + activePlayer).textContent = dice;
//var x = document.querySelector('#score-0').tetxtContent;
//console.log(x);
 */



/* My Code





var scores, roundScore, activePlayer;
scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2.Display the result
    var diceDOM = document.querySelector('.dice');
    document.querySelector('.dice').styleDisplay = 'block';
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice_' + dice + '.png';

    //3. Update the round score if the rolled number was NOT a 1
    if (dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {
        //next player
        activePlayer === 0 ? activePlayer = 1 : actvePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';



    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    //add current score to global score
    scores[actvePlayer] += roundScore;


    //Update the user interface
    document.querySelector('#score' + activePlayer).textContent = scores[activePlayer];


    //check if player won the game
} );

*/





var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-new').addEventListener('click', init);

function init () {
	scores= [0,0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

	document.querySelector('#score-0').textContent = '0';
	document.querySelector('#score-1').textContent = '0';
	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.d').style.display = 'none';

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.add('active');

}

document.querySelector('.btn-roll').addEventListener('click', function() {

	if(gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var d = Math.floor(Math.random() * 6) + 1;
        document.querySelector('#current-' + activePlayer).textContent = dice;
        document.querySelector('#current-' + activePlayer).textContent = d;
        var diceDOM = document.querySelector('.dice');
        var dDOM = document.querySelector('.d');
        diceDOM.style.display = 'block';
        dDOM.style.display = 'block';
        diceDOM.src = 'dice_' + dice + '.png';
        dDOM.src = 'd_' + d + '.png';
        

			if(dice !== 1 && d !== 6) {
			roundScore += dice + d;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            diceDOM.src = 'dice_' + dice + '.png';
            dDOM.src = 'd_' + d + '.png';
			} else if(dice !== 6 && d !== 1) {
                roundScore += dice + d;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
                diceDOM.src = 'dice_' + dice + '.png';
                dDOM.src = 'd_' + d + '.png';
				
			}else if(dice !== 6 && d !== 5) {
                roundScore += dice + d;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
                diceDOM.src = 'dice_' + dice + '.png';
                dDOM.src = 'd_' + d + '.png';
				
			}else {
                nextPlayer();
            }
    }

});


document.querySelector('.btn-hold').addEventListener('click', function() { 

	if(gamePlaying) {
		scores[activePlayer] += roundScore;

		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		if(scores[activePlayer] >= 100) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.d').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}
});

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.d').style.display = 'none';
}