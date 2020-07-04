var canvas;
var formState = 0;
var userCount;
var database;
var form, user, ans;


function setup(){
  createCanvas(500, 500);
  database = firebase.database();
  
  ans = new Display();
  ans.getState();
  ans.start();
}

function draw(){
  background("white");     
}
