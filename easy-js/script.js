const prompt = require('prompt-sync')();

var john = [32, 56, 98, 12, 3, 2];
console.log(john.sort((a,b)=> a-b));
console.log(john.sort());

const testy = [{username: 'dummy', score:0}, {username: 'dummy', score:0}, {username: 'dummy', score:0}];
const nme = ["waslead", "taaj", "saheed"];
const scores =[];
for (var i=0; i < nme.length; i++){
    var score = prompt(nme[i] + ', please enter your score');
    console.log(score);
    var unit = prompt('please enter your course unit');
    var weight = score * unit;
    testy[i].username = nme[i];
    testy[i].score = weight;
    scores.push(weight);
    //push('{username' + ':' + nme[i] + ',' + 'score' + ':' + weight + '}');
    // console.log(testy);
    // console.log(nme.indexOf(nme[i]))
}
var newScores = scores.sort((a,b)=>{return b-a});
console.log(newScores);
for (var i=0; i<newScores.length; i++){
  if (newScores[0] === testy[i].score){
    console.log("The winner is " + testy[i].username + " with a score of " + testy[i].score);
  }
}

