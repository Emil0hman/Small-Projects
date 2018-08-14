// Property of Emil Öhman
// emilohman.nu
// mail@emilohman.nu

var pos = [];
var Hpos = [];

var d = new Date();
var sec = d.getSeconds();
var min = d.getMinutes();
var h = d.getHours();

var scale = 1.2;

for (var i = 0; i < 360; i++) {
    if (i % 6 == 0) {
        pos.push(i);
    }
    if (i % 30 == 0) {
        Hpos.push(i);
    }
}

function secUpdate() {
    var d = new Date();
    sec = d.getSeconds();
    console.log(sec + " " + min + " " + h);

    document.getElementById("sec").style.transform = "rotate(" + pos[sec] + "deg) scale(" + scale + ")"
}
function minUpdate() {
    var d = new Date();
    min = d.getMinutes();

    document.getElementById("min").style.transform = "rotate(" + pos[min] + "deg) scale(" + scale + ")"
}
function hUpdate() {
    var d = new Date();
    h = d.getHours();
    

    document.getElementById("h").style.transform = "rotate(" + pos[h] + "deg) scale(" + scale + ")";
}

setInterval(function() {
    secUpdate();
    minUpdate();    
    hUpdate();
}, 100)
