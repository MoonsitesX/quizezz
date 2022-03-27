function check1() {
var A1 = document.querySelector('input[name=Qu1]:checked').value;
var A2 = document.querySelector('input[name=Qu2]:checked').value;
var A3 = document.querySelector('input[name=Qu3]:checked').value;
var A4 = document.querySelector('input[name=Qu4]:checked').value;
var A5 = document.querySelector('input[name=Qu5]:checked').value
if (A1 == "1p1" ) {
    var p1 = 20
}
else {
    var p1 = 0
}
if (A2 == "2p3" ) {
    var p2 = 20
}
else {
    var p2 = 0
}
if (A3 == "3p4" ) {
    var p3 = 20
}
else {
    var p3 = 0
}
if (A4 == "4p4" ) {
    var p4 = 20
}
else {
    var p4 = 0
}
if (A5 == "5p4" ) {
    var p5 = 20
}
else {
    var p5 = 0
}
var marks = parseInt(p1)+parseInt(p2)+parseInt(p3)+parseInt(p4)+parseInt(p5)
console.log(marks)
document.getElementById("score").innerHTML=marks
}


