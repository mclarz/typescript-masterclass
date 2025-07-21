type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCat = Dog | Cat;

let dog: DogAndCat = {
  name: "buddy",
  barks: true,
  wags: true,
};

let cat: DogAndCat = {
  name: "kitty",
  purrs: true,
};

let hybridAnimal: DogAndCat = {
  name: "buddy",
  purrs: true,
  barks: true,
};
