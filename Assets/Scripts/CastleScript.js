#pragma strict

var castleHealth : int;
var health : GUIText;

function Start () {
	castleHealth = 100;
	health.text = castleHealth + "%";
}

function Update () {
	health.text = castleHealth + "%";
}

function OnCollisionEnter2D(coll : Collision2D) {
	Debug.Log('colo1');
	if(coll.gameObject.tag == "enemy") {
		Debug.Log('colo');
		castleHealth = castleHealth - coll.gameObject.GetComponent(EnemyScript).hitStrength;
	}
}