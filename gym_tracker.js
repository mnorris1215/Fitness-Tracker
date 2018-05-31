//This is to track weight, set, and rep averages for strength training.
//Should also come with a feature to subtract mistakes


//First attempt to add numbers to a variable, and then the variable to an array
//variables would then be incremented with new user input.

/*var allnum = [];
var numset = parseInt (document.getElementById('bestset').value);
var +numrep = document.getElementById('bestrep').innerHTML;
var +numweight = document.getElementById('bestweight').innerHTML;
allnum.push(numset);
alert(allnum);


function best(){
  var max = allnum.reduce(function(a,b){
    return Math.max(a,b);
    document.write(max);
  });

}
best();

function average(){
  var range = allnum.reduce(function(a,b){
    return a + b;
  }) / allnum.length;
  document.write(range);
}
average();*/


//Second Attempt: Separate sets, reps, and weight into unique input boxes with
//ids. Then have JS display the current weight, new weight, and difference.


/*$(document).ready(function () {
  $("#update").click(function(event) {
    event.preventDefault();

  $("#bestset").attr("value", function() {
    var curvalue = parseInt($("#bestset").html("input")),
      newvalue += curvalue;
    return newvalue;

  $("#bestrep").attr("value", function() {
    var curvalue = parseInt($("#bestrep").html(input)),
      newvalue += curvalue;
    return newvalue;

  });
  });
});
var allset = [];
var setcount = allset.length;*/

//Third Attempt:
