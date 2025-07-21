// arrays
let a: number[] = [1, 2, 3, 4, 5];
let b: Array<string> = ["1", "2", "3"];
let c: (string | number | boolean)[] = ["1", 2, true];

// alias of caterer
type Caterer = {
  name: string;
  address: string;
  phone: number;
};

// alias of seat
type Seat = {
  [seatNumber: string]: string;
};

// alias of airplane
type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
  seats: Seat;
};

// airplanes
// array of object
type Airplanes = Airplane[];

let airplane: Airplanes = [
  {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
      name: "Special Food Ltd",
      address: "484, Some Street, New York",
      phone: 7867856751,
    },
    seats: {
      A1: "John Doe",
      A2: "Mark Doe",
      A3: "Sam Doe",
    },
  },
];
