//Updating Object Properties


var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

myDog.name = "Happy Coder";



//Add New Properties to a JavaScript Object

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

myDog.bark = "bow-wow";


//Delete Properties from a JavaScript Object

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"],
  "bark": "woof"
};

delete myDog.tails;