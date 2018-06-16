//finally fucking works!! Insert() function displays input in array
//array contains the output and is displayed in the <p> "showbox"
var setuserinput = document.getElementById("sets");
var setsarray = [];
document.getElementById("setshowbox").innerHTML = setsarray;
function setinsert(){
  setsarray.push(setuserinput.value);
  document.getElementById('setshowbox').innerHTML = setsarray;
}

//Step 2: Find the highest number in the array and display in
//total
var setcurrentLargest = 0;
document.getElementById('settotal').innerHTML = setcurrentLargest;
function sethighest(){
  setsarray.sort(function(a,b){return b-a});
  setcurrentLargest = parseInt(setsarray[0]);
  document.getElementById('settotal').innerHTML = setcurrentLargest;
}

//Step 3: Find the Average and display in avgbox
var setaverage = 0;
document.getElementById('setavgbox').innerHTML = setaverage;
function setrange(){
  var tot = 0;
  for (var i = 0; i<setsarray.length; i++){
    tot += parseInt(setsarray[i]);
  }
  setrawavg = tot/setsarray.length;
  //rounds up to 2 decimals
  setaverage = Math.round(setrawavg * 100)/100;
  document.getElementById('setavgbox').innerHTML = setaverage;
}

// //Repeat for Reps
var repuserinput = document.getElementById("reps");
var repsarray = [];
document.getElementById("repshowbox").innerHTML = repsarray;
function repinsert(){
  repsarray.push(repuserinput.value);
  document.getElementById('repshowbox').innerHTML = repsarray;
}

var repcurrentLargest = 0;
document.getElementById('reptotal').innerHTML = repcurrentLargest;
function rephighest(){
  repsarray.sort(function(a,b){return b-a});
  repcurrentLargest = parseInt(repsarray[0]);
  document.getElementById('reptotal').innerHTML = repcurrentLargest;
}

var repaverage = 0;
document.getElementById('repavgbox').innerHTML = repaverage;
function reprange(){
  var tot = 0;
  for (var i = 0; i<repsarray.length; i++){
    tot += parseInt(repsarray[i]);
  }
  reprawavg = tot/repsarray.length;
  //rounds up to 2 decimals
  repaverage = Math.round(reprawavg * 100)/100;
  document.getElementById('repavgbox').innerHTML = repaverage;
}

//Repeat for weight
var weightuserinput = document.getElementById("weight");
var weightarray = [];
document.getElementById("weightshowbox").innerHTML = weightarray;
function weightinsert(){
  weightarray.push(weightuserinput.value);
  document.getElementById('weightshowbox').innerHTML = weightarray;
}

var weightcurrentLargest = 0;
document.getElementById('weighttotal').innerHTML = weightcurrentLargest;
function weighthighest(){
  weightarray.sort(function(a,b){return b-a});
  weightcurrentLargest = parseInt(weightarray[0]);
  document.getElementById('weighttotal').innerHTML = weightcurrentLargest;
}

var weightaverage = 0;
document.getElementById('weightavgbox').innerHTML = weightaverage;
function weightrange(){
  var tot = 0;
  for (var i = 0; i<weightarray.length; i++){
    tot += parseInt(weightarray[i]);
  }
  weightrawavg = tot/weightarray.length;
  //rounds up to 2 decimals
  weightaverage = Math.round(weightrawavg * 100)/100;
  document.getElementById('weightavgbox').innerHTML = weightaverage;
}

//create one function to run the rest of the functions. This serves
//to create only one value for onClick.
function setmain(){
  setinsert();
  sethighest();
  setrange();
}
function repmain() {
  repinsert();
  rephighest();
  reprange();
}
function weightmain() {
  weightinsert();
  weighthighest();
  weightrange();
}
