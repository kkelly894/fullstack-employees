import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await seedEmployees();

console.log("🌱 Database seeded.");

async function seedEmployees() {
  await db.connect();
  await createEmployee({
    name: "Jean-Paul Sartre",
    birthday: "1905-06-21",
    salary: 85000,
  });

  await createEmployee({
    name: "Johann Sebastian Bach",
    birthday: "1685-03-31",
    salary: 92000,
  });

  await createEmployee({
    name: "Wolfgang Amadeus Mozart",
    birthday: "1756-01-27",
    salary: 98000,
  });

  await createEmployee({
    name: "Franz Kafka",
    birthday: "1883-07-03",
    salary: 76000,
  });

  await createEmployee({
    name: "Erwin Schrödinger",
    birthday: "1887-08-12",
    salary: 110000,
  });

  await createEmployee({
    name: "Marie Curie",
    birthday: "1867-11-07",
    salary: 115000,
  });

  await createEmployee({
    name: "Ada Lovelace",
    birthday: "1815-12-10",
    salary: 105000,
  });

  await createEmployee({
    name: "Nikola Tesla",
    birthday: "1856-07-10",
    salary: 112000,
  });

  await createEmployee({
    name: "Leonardo da Vinci",
    birthday: "1452-04-15",
    salary: 120000,
  });

  await createEmployee({
    name: "Isaac Newton",
    birthday: "1643-01-04",
    salary: 118000,
  });

  await db.end();
  console.log("This actually worked");
}
