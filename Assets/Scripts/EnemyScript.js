#pragma strict

private var start : Vector3;
private var end : Vector3;
var speed = 1.0;

private var startTime : float;
private var length : float;

var word : String;
static var enteredWord : String;

var hitStrength : int = 20;

function Start () {
	start = new Vector3(0,2.5,0);
	end = new Vector3(0,-8,0);
	length = Vector3.Distance(start, end);
	startTime = Time.timeSinceLevelLoad;
	this.gameObject.transform.GetChild(0).position = Camera.main.WorldToViewportPoint(start);
	
	word = this.gameObject.transform.GetChild(0).guiText.text;
	
}

function Update () {

	// Move the sprite and word	
	var fraction = ((Time.time - startTime) * speed)/length;
	transform.position = Vector3.Lerp(start, end, fraction);
	var newPos : Vector3 = transform.position-(Vector3(0,1.5,0));
	
	this.gameObject.transform.GetChild(0).position = Camera.main.WorldToViewportPoint(newPos);
	
	// Scale larger
	transform.localScale += new Vector3(0.00025, 0.00025, 0);
	
	// Check for hitting 
	
	
	// Check for correct word
	if(enteredWord == word){
		Debug.Log("enemy killed!");
	//	gameObject.animation.;
		Destroy(this.gameObject);
	//	Destroy(Sprite);
		
	}
}
