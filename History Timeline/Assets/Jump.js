var FPS : GameObject;
var Box : UI.InputField;
function ToDate () {
var Year = GameObject.Find(Box.text);
	if (Year == null) {
	return;
	}
FPS.transform.position.z = Year.transform.position.z;
}

function Update () {
	if (Input.GetKeyDown("return")) {
	ToDate();
	} 
}