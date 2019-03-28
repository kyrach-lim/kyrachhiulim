
function setup() {
	// make canvas full screen
	createCanvas(windowWidth, windowHeight);

}


function draw() {
	// adding clear() to the draw loop will clear each frame, erasing object trails
	// clear();

	fill (90, 100, 69)
	stroke (20, 50, 50)
	ellipse(mouseX, mouseY, 100);
}
