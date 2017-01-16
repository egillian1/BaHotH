// Creates a character object with appropriate stats
function createCharacter(name, speed, might, sanity, knowledge, speedIndex,
  mightIndex, sanityIndex, knowledgeIndex) {
  return {
    fullName: name,
    speedArray: speed,
    mightArray: might,
    sanityArray: sanity,
    knowledgeArray: knowledge,
    speedIndex: this.speedIndex,
    mightIndex: this.mightIndex,
    sanityIndex: this.sanityIndex,
    knowledgeIndex: this.knowledgeIndex
  }
}

// Creates and returns an object containing character stats by using
// the passed number
function createCharacterFromNumber(number) {

  let character = createCharacter("Missy Dubourde",[0,3,4,5,6,6,6,7,7],
    [0,2,3,3,3,4,5,6,7], [0,1,2,3,4,5,5,6,7], [0,2,3,4,4,5,6,6,6], 3, 4, 3, 4);

  if(number == 2){
    character = createCharacter("Zoe Ingstrom", [0,4,4,4,4,5,6,8,8],
      [0,2,2,3,3,4,4,6,7], [0,3,4,5,5,6,6,7,8], [0,1,2,3,4,4,5,5,5], 4, 4, 3, 3);
  }

  if(number == 3){
    character = createCharacter("Darrin 'Flash' Williams", [0,4,4,4,5,6,7,7,8],
      [0,2,3,3,4,5,6,6,7], [0,1,2,3,4,5,5,5,7], [0,2,3,4,5,5,5,7], 5, 3, 3, 3);
  }

  if(number == 4){
    character = createCharacter("Ox Bellows", [0,2,2,2,3,4,5,5,6],
      [0,4,5,5,6,6,7,8,8], [0,2,2,3,4,5,5,6,7], [0,2,2,3,3,5,5,6,6], 5, 3, 3, 3);
  }

  if(number == 5){
    character = createCharacter("Brandon Jaspers", [0,3,4,4,4,5,6,7],
      [0,2,3,3,4,5,6,6,7], [0,3,3,3,4,5,6,7,8], [0,1,3,3,5,5,6,6,7], 3, 4, 4, 3);
  }

  if(number == 6){
    character = createCharacter("Peter Akimoto", [0,3,3,3,4,6,6,7,7],
      [0,2,3,3,4,5,5,6,8], [0,3,4,4,4,5,6,6,7], [0,3,4,4,5,6,7,7,8], 4, 3, 4, 3);
  }

  if(number == 7){
    character = createCharacter("Madame Zostra", [0,2,3,3,5,5,6,6,7],
      [0,2,3,3,4,5,5,5,6], [0,4,4,4,5,6,7,8,8], [0,1,3,4,4,4,5,6,6], 3, 4, 3, 4);
  }

  if(number == 8){
    character = createCharacter("Vivian Lopez", [0,3,4,4,4,4,6,7,8],
      [0,2,2,2,4,4,5,6,6], [0,4,4,4,5,6,7,8,8], [0,4,5,5,5,5,6,6,7], 4, 3, 3, 4);
  }

  if(number == 9){
    character = createCharacter("Father Rhinehardt", [0,2,3,3,4,5,6,7,7],
      [0,1,2,2,4,4,5,5,7], [0,3,4,5,5,6,7,7,8], [0,1,3,3,4,5,6,6,8], 3, 3, 5, 4);
  }

  if(number == 9){
    character = createCharacter("Father Rhinehardt", [0,2,3,3,4,5,6,7,7],
      [0,1,2,2,4,4,5,5,7], [0,3,4,5,5,6,7,7,8], [0,1,3,3,4,5,6,6,8], 3, 3, 5, 4);
  }

  if(number == 10){
    character = createCharacter("Professor Longfellow", [0,2,2,4,4,5,5,6,6],
      [0,1,2,3,4,5,5,6,6], [0,1,3,3,4,5,5,6,7], [0,4,5,5,5,5,6,7,8], 4, 3, 3, 5);
  }

  if(number == 11){
    character = createCharacter("Jenny LeClerc", [0,2,3,4,4,4,5,6,8],
      [0,3,4,4,4,4,5,6,8], [0,1,1,2,4,4,4,5,6], [0,2,3,3,4,4,5,6,8], 4, 3, 5, 3);
  }

  if(number == 12){
    character = createCharacter("Heather Granville", [0,3,3,4,5,6,6,7,8],
      [0,3,3,3,4,5,6,7,8], [0,3,3,3,4,5,6,6,6], [0,2,3,3,4,5,6,7,8], 3, 3, 3, 5);
  }
}

module.exports = {
  createCharacterFromNumber: createCharacterFromNumber
};
