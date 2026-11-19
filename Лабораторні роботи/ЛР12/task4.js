const person = {
  firstName: "Марія",
  lastName: "Лисенко",
  age: 19,
};

person.email = "maria@example.com";
delete person.age;

console.log(person);
