#pragma strict

var inputString : String = "";
var es : EnemyScript;

function OnGUI() {

	GUI.SetNextControlName("textField");
	inputString = GUI.TextField (Rect (Screen.width/2-250, Screen.height-75, 500, 50), inputString, 25);
	
	if(inputString != "" && Event.current.keyCode == KeyCode.Return){ 
		Debug.Log(inputString);
		// Check the word
		es.enteredWord = inputString;
		
		// Clear word box
		inputString = "";
	}
	
	GUI.FocusControl("textField");
}

function Start () {

}

function Update () {
	
}