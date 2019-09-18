//// 1 OBJECTS

myPenguin = {
  character: 'Captain Cook, Greta and other penguins',
  origin: 'Mr.Popper\'s Penguins',
  author: 'Richard and Florence Atwater'
}

// console.log("Hello, I'm a penguin and my name is" + myPenguin.character);

myPenguin.canFly = false;

myPenguin.chirp = function () {console.log("CHIRP CHIRP! Is this what penguins sound like?")}

myPenguin.sayHello = function () {
  //console.log("Hello, I'm a penguin and my name is" + this.character);
}

myPenguin.character = 'Penguin McPenguinFace';

myPenguin.sayHello();

myPenguin.fly = function () {
  //this.canFly ? console.log("I can fly!") : console.log("No flying for me!");
}

myPenguin.canFly = true;
myPenguin.fly();

for (key in myPenguin) {
  //console.log(key);
}

for (value in myPenguin) {
  //console.log(myPenguin[value]);
}


//// 2 OBJECTS & ARRAYS

myPenguin.favoriteFoods = ['Caneloni', 'Tajin', 'Cuscus'];
//console.log(myPenguin.favoriteFoods[1]);

myPenguin.firstFavFood = myPenguin.favoriteFoods[0];

myPenguin.favoriteFoods.push('Migas');
//console.log(myPenguin.favoriteFoods.length);

myPenguin.favoriteFoods[3] = 'pineapples';

myPenguin.lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1];

for (var i = 0; i < myPenguin.favoriteFoods.length; i++) {
 console.log(myPenguin.favoriteFoods[i]);
}

// console.log(myPenguin.lastFavFood);
// console.log(myPenguin.favoriteFoods);


//// 3 OBJECTS & OBJECTS

myPenguin.outfit = {
  hat: 'baseball cap',
  shirt: 'Hawaiian shirt',
  pants: 'cargo shorts',
  shoes: 'flip-flops'
}

let penguinHatType = myPenguin.outfit.hat;
myPenguin.outfit.accessory = 'pocket watch';

// console.log(penguinHatType, myPenguin.outfit.accessory )

myPenguin.outfit.hat = 'top hat';
// console.log(myPenguin.outfit.hat)

// console.log(myPenguin.outfit);
delete myPenguin.outfit.pants;
// console.log(myPenguin.outfit);
// console.log(Object.entries(myPenguin))

for (let value of Object.values(myPenguin.outfit)) {
  // console.log(value);
}

// 4 ARRAYS AND OBJECTS

var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};

var penguins = [gunter, ramon, fred];

// console.log(penguins[0]);

var secondPenguin = penguins[1];

// console.log(penguins[penguins.length-1].name);

penguins.push(myPenguin);
// console.log(penguins.length)

penguins[0].canFly = true;

penguins[0].sayHello();

for (var i = 0; i < penguins.length; i++) {
  penguins[i].numberOfFeet = 2;
};

for (var i = 0; i < penguins.length; i++) {
  canFly = true ? console.log(penguins[i].name || penguins[i].character + ' can fly!') : null;
};

// console.log(penguins)




