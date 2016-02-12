var movTexture : MovieTexture;
function Start () {
GetComponent.<Renderer>().material.mainTexture = movTexture;
	movTexture.Play();
	movTexture.loop = true;
}
