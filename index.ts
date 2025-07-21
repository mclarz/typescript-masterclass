type Dog = {
  name: string;
  barks: boolean;
};
type Cat = {
  name: string;
  purrs: boolean;
  color: string;
};

type HybridAnimal = Dog & Cat;

let HyBridAnimal: HybridAnimal = {
  name: "Hybrid",
  color: "white",
  purrs: true,
  barks: false,
};
