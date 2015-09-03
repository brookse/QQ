#pragma strict

var enemy : GameObject;

var countdown : GUIText;
var timeCounter : float;

var firstRoundLength : float = 15.0;
var secondRoundLength : float = 20.0;
var thirdRoundLength : float = 30.0;

var firstRoundNumber : int = 5;
var secondRoundNumber : int = 7;
var thirdRoundNumber : int = 10;

var firstRoundVelocity : float = 1.0;
var secondRoundVelocity : float = 2.0;
var thirdRoundVelocity : float = 3.0;

function Start () {

	BeginGame();
	countdown.enabled = false;
}

function Update () {
}

function BeginGame(){

/*	yield WaitForSeconds(1);
	countdown.text = "3";
	countdown.enabled = true;
	yield WaitForSeconds(.75);
	countdown.text = "2";
	yield WaitForSeconds(.75);
	countdown.text = "1";
	yield WaitForSeconds(.75);
	
	countdown.text = "FIRST ROUND";
	yield WaitForSeconds(.75);
	countdown.text = "";
	*/
//	FirstRound();
/*	var firstRoundStart : float = Time.timeSinceLevelLoad;
	while(firstRoundNumber > 0) {
		while(Time.timeSinceLevelLoad < firstRoundStart+firstRoundLength){
			var enem = Instantiate(enemy, Vector3(0,6,0), Quaternion.Euler(0,0,0));
			enem.GetComponent(EnemyScript).speed = firstRoundVelocity;

			firstRoundNumber--;
		}
	}*/

	
	for(var i = 0; i < firstRoundNumber; i++){
		var enem = Instantiate(enemy, new Vector3(0,6,0), Quaternion.identity);
		enem.GetComponent(EnemyScript).speed = firstRoundVelocity;
		
		yield WaitForSeconds(3);
	}

}

/*	
	countdown.text = "SECOND ROUND";
	yield WaitForSeconds(.75);
	countdown.text = "";
	SecondRound();
	yield WaitForSeconds(secondRoundLength);
	
	countdown.text = "THIRD ROUND";
	yield WaitForSeconds(.75);
	countdown.text = "";
	ThirdRound();
	yield WaitForSeconds(thirdRoundLength);
	
}

function FirstRound() {
	Debug.Log('one');
	var firstRoundStart : float = Time.timeSinceLevelLoad;
	Debug.Log('two');
	while(firstRoundNumber > 0) {
		Debug.Log('three');
		while(Time.timeSinceLevelLoad < firstRoundStart+firstRoundLength){
			Debug.Log('four');
			var enem = Instantiate(enemy, Vector3(0,6,0), Quaternion.Euler(0,0,0));
			enem.GetComponent(EnemyScript).speed = firstRoundVelocity;
	
			firstRoundNumber--;
		}
	}
	
}

function SecondRound() {

	// Second Round
	while(secondRoundLength >= 0.0){
	
	}
}

function ThirdRound() {

	// Third Round
	while(thirdRoundLength >= 0.0){
	
	}
}*/