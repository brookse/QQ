#pragma strict

var pos : Vector3;
var word : String;

private var threeLetterWords = ["cat", "dog", "hat", "jet", "bug", "pun"];
private var fourLetterWords = ["tree", "plug", "pony", "lamp", "jack", "frog"];
private var fiveLetterWords = ["party", "squid", "phone", "truck", "fence", "crank"];

function Start () {
	this.guiText.text = threeLetterWords[Random.Range(0,6)];
}

function Update () {
	this.transform.position = pos;
}