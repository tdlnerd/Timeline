var FPS : GameObject;
var Dist : float;


function Update () {
Dist = Mathf.Abs(transform.position.z - FPS.transform.position.z);
var Calc = 0.8 / Dist;
GetComponent.<Renderer>().material.color.a = Calc - 0.1;

    if (FPS == null) {
    FPS = GameObject.Find("FPSController");

    }
}