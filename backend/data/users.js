import bcrypet from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypet.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John",
    email: "john@example.com",
    password: bcrypet.hashSync("123456", 10),
  },
  {
    name: "Jane",
    email: "jane@example.com",
    password: bcrypet.hashSync("123456", 10),
  },
];

export default users;
