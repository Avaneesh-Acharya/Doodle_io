function setup() {
    canvas = createCanvas(250, 250)
    canvas.center()
    background("cornsilk")
    //canvas.mouseReleased(Classify_Canvas)//
    sp = window.speechSynthesis
}
function preload() {
    classifier = ml5.imageClassifier("DoodleNet")
}
function draw() {
    strokeWeight(15)
    stroke(0)
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
    canvas.mouseReleased(Classify_Canvas)
}
function clear_canvas() {
    background("cornsilk")
}
function Classify_Canvas() {
    classifier.classify(canvas, got_result)
}
function got_result(error, results) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        document.getElementById("label").innerHTML="label: "+results[0].label
        document.getElementById("confidence").innerHTML="confidence: "+Math.round(results[0].confidence*100)+"%"
        utter=new SpeechSynthesisUtterance(results[0].label)
        sp.speak(utter)
    }
    }
