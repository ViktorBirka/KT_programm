const users = [
  { name: "Андрій", email: "andrii@example.com", age: 18 },
  { name: "Софія", email: "sofiia@example.com", age: 19 },
  { name: "Максим", email: "maksym@example.com", age: 20 },
];

for (const { name, email, age } of users) {
  console.log(name, email, age);
}
