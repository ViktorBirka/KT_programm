const car1 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2019,
};

const car2 = {
  brand: "Skoda",
  model: "Octavia",
  owner: 2022,
};

const car3 = { ...car1, ...car2 };

console.log(car3);
