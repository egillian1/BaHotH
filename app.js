'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


var router = express.Router();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(router);
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', function(req, res) {
  res.render('index.html');
  console.log("Index rendered");
});

// Number used to generate character stats
var characterNumber = 0;

app.post('/character', function(req, res, next){
  characterNumber = req.body.characterNumber;
  res.render('tile.html');
  console.log(characterNumber);
});

app.get('/character.json', function(req, res, next){
  console.log(characterNumber);
  let character = createCharacterFromNumber(characterNumber);
  res.json({character: character});
})

// Creates and returns an object containing character stats by using
// the passed number
function createCharacterFromNumber(number){
console.log("Creating character");

  let character = {
    fullName: "Missy Dubourde",
    speedArray: [0,3,4,5,6,6,6,7,7],
    mightArray: [0,2,3,3,3,4,5,6,7],
    sanityArray: [0,1,2,3,4,5,5,6,7],
    knowledgeArray: [0,2,3,4,4,5,6,6,6],
    speedIndex: 3,
    mightIndex: 4,
    sanityIndex: 3,
    knowledgeIndex: 4
  };

  if(number == 2){
    character.fullName = "Zoe Ingstrom";
    character.speedArray = [0,4,4,4,4,5,6,8,8];
    character.mightArray = [0,2,2,3,3,4,4,6,7];
    character.sanityArray = [0,3,4,5,5,6,6,7,8];
    character.knowledgeArray = [0,1,2,3,4,4,5,5,5];
    character.speedIndex = 4;
    character.mightIndex = 4;
    character.sanityIndex = 3;
    character.knowledgeIndex = 3;
  }

  if(number == 3){
    character.fullName = "Darrin 'Flash' Williams";
    character.speedArray = [0,4,4,4,5,6,7,7,8];
    character.mightArray = [0,2,3,3,4,5,6,6,7];
    character.sanityArray = [0,1,2,3,4,5,5,5,7];
    character.knowledgeArray = [0,2,3,4,5,5,5,7];
    character.speedIndex = 5;
    character.mightIndex = 3;
    character.sanityIndex = 3;
    character.knowledgeIndex = 3;
  }

  if(number == 4){
    character.fullName = "Ox Bellows";
    character.speedArray = [0,2,2,2,3,4,5,5,6];
    character.mightArray = [0,4,5,5,6,6,7,8,8];
    character.sanityArray = [0,2,2,3,4,5,5,6,7];
    character.knowledgeArray = [0,2,2,3,3,5,5,6,6];
    character.speedIndex = 5;
    character.mightIndex = 3;
    character.sanityIndex = 3;
    character.knowledgeIndex = 3;
  }

  if(number == 5){
    character.fullName = "Brandon Jaspers";
    character.speedArray = [0,3,4,4,4,5,6,7];
    character.mightArray = [0,2,3,3,4,5,6,6,7];
    character.sanityArray = [0,3,3,3,4,5,6,7,8];
    character.knowledgeArray = [0,1,3,3,5,5,6,6,7];
    character.speedIndex = 3;
    character.mightIndex = 4;
    character.sanityIndex = 4;
    character.knowledgeIndex = 3;
  }

  if(number == 6){
    character.fullName = "Peter Akimoto";
    character.speedArray = [0,3,3,3,4,6,6,7,7];
    character.mightArray = [0,2,3,3,4,5,5,6,8];
    character.sanityArray = [0,3,4,4,4,5,6,6,7];
    character.knowledgeArray = [0,3,4,4,5,6,7,7,8];
    character.speedIndex = 4;
    character.mightIndex = 3;
    character.sanityIndex = 4;
    character.knowledgeIndex = 3;
  }

  if(number == 7){
    character.fullName = "Madame Zostra";
    character.speedArray = [0,2,3,3,5,5,6,6,7];
    character.mightArray = [0,2,3,3,4,5,5,5,6];
    character.sanityArray = [0,4,4,4,5,6,7,8,8];
    character.knowledgeArray = [0,1,3,4,4,4,5,6,6];
    character.speedIndex = 3;
    character.mightIndex = 4;
    character.sanityIndex = 3;
    character.knowledgeIndex = 4;
  }

  if(number == 8){
    character.fullName = "Vivian Lopez";
    character.speedArray = [0,3,4,4,4,4,6,7,8];
    character.mightArray = [0,2,2,2,4,4,5,6,6];
    character.sanityArray = [0,4,4,4,5,6,7,8,8];
    character.knowledgeArray = [0,4,5,5,5,5,6,6,7];
    character.speedIndex = 4;
    character.mightIndex = 3;
    character.sanityIndex = 3;
    character.knowledgeIndex = 4;
  }

  if(number == 9){
    character.fullName = "Father Rhinehardt";
    character.speedArray = [0,2,3,3,4,5,6,7,7];
    character.mightArray = [0,1,2,2,4,4,5,5,7];
    character.sanityArray = [0,3,4,5,5,6,7,7,8];
    character.knowledgeArray = [0,1,3,3,4,5,6,6,8];
    character.speedIndex = 3;
    character.mightIndex = 3;
    character.sanityIndex = 5;
    character.knowledgeIndex = 4;
  }

  if(number == 9){
    character.fullName = "Father Rhinehardt";
    character.speedArray = [0,2,3,3,4,5,6,7,7];
    character.mightArray = [0,1,2,2,4,4,5,5,7];
    character.sanityArray = [0,3,4,5,5,6,7,7,8];
    character.knowledgeArray = [0,1,3,3,4,5,6,6,8];
    character.speedIndex = 3;
    character.mightIndex = 3;
    character.sanityIndex = 5;
    character.knowledgeIndex = 4;
  }

  if(number == 10){
    character.fullName = "Professor Longfellow";
    character.speedArray = [0,2,2,4,4,5,5,6,6];
    character.mightArray = [0,1,2,3,4,5,5,6,6];
    character.sanityArray = [0,1,3,3,4,5,5,6,7];
    character.knowledgeArray = [0,4,5,5,5,5,6,7,8];
    character.speedIndex = 4;
    character.mightIndex = 3;
    character.sanityIndex = 3;
    character.knowledgeIndex = 5;
  }

  if(number == 11){
    character.fullName = "Jenny LeClerc";
    character.speedArray = [0,2,3,4,4,4,5,6,8];
    character.mightArray = [0,3,4,4,4,4,5,6,8];
    character.sanityArray = [0,1,1,2,4,4,4,5,6];
    character.knowledgeArray = [0,2,3,3,4,4,5,6,8];
    character.speedIndex = 4;
    character.mightIndex = 3;
    character.sanityIndex = 5;
    character.knowledgeIndex = 3;
  }

  if(number == 12){
    character.fullName = "Heather Granville";
    character.speedArray = [0,3,3,4,5,6,6,7,8];
    character.mightArray = [0,3,3,3,4,5,6,7,8];
    character.sanityArray = [0,3,3,3,4,5,6,6,6];
    character.knowledgeArray = [0,2,3,3,4,5,6,7,8];
    character.speedIndex = 3;
    character.mightIndex = 3;
    character.sanityIndex = 3;
    character.knowledgeIndex = 5;
  }

  return character;
}

app.listen(5000);
