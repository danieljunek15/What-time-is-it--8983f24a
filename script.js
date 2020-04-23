var inputdiameter;
var omtrekcirkel;
var inhoudcircel;

function submit() {
    inputdiameter = document.getElementById('diameter').value;
    omtrekcirkel = inputdiameter * Math.PI;
    inhoudcircel = inputdiameter ** 2 * Math.PI / 4;
    document.getElementById('show2').innerHTML = inhoudcircel;
    document.getElementById("show").innerHTML = omtrekcirkel;
}
