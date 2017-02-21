var app = angular.module('myModule', []);


app.controller("stewieController", function($scope, $interval){
  $scope.wordDisplay =[];

  var wordBank = ['mom', 'mommy', 'mother', 'madre', 'brian', 'peter', 'woman'];

  var phraseBank = ['blasted woman', 'world domination', 'pipe down lois', 'whatever helps you sleep at night', 'it wasnt even about the egg'];

  var styleBank = ['red', 'orange', 'big', 'italic'];

  $scope.wordClick = function(){
    var randomWord = wordBank[Math.floor(Math.random()*wordBank.length)];
    $scope.wordDisplay.push({
      text:randomWord,
      class: 'none'
    });
  };

  $scope.phraseClick = function(){
    var randomPhrase = phraseBank[Math.floor(Math.random()*phraseBank.length)];
    $scope.wordDisplay.push({
      text:randomPhrase,
      class: "none"
    });
  };

  $scope.styleClick = function(){
    var randomStyle = styleBank[Math.floor(Math.random()*styleBank.length)];
    var randomWord = wordBank[Math.floor(Math.random()*wordBank.length)];
    $scope.wordDisplay.push({
      text: randomWord,
      class: randomStyle
    });
  };

  $scope.phraseStyleClick = function(){
    var randomStyle = styleBank[Math.floor(Math.random()*styleBank.length)];
    var randomPhrase = phraseBank[Math.floor(Math.random()*phraseBank.length)];
    $scope.wordDisplay.push({
      text: randomPhrase,
      class: randomStyle
    });
  };

  // var interval = function(){$interval($scope.styleClick(), 1000)};


});
