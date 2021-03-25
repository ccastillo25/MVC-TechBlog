const { User } = require("../models");

const userData = [
  {
    username: "user1",
    github: "user1",
    email: "user1@gmail.com",
    password: "user1pass",
  },
  {
    username: "user2",
    github: "user2",
    email: "user2@gmail.com",
    password: "user2pass",
  },
  {
    username: "user3",
    github: "user3",
    email: "user3@gmail.com",
    password: "user3pass",
  },
  {
    username: "user4",
    github: "user4@gmail.com",
    email: "user4@gmail.com",
    password: "user4pass",
  },
  {
    username: "user5",
    github: "user5",
    email: "user5@gmail.com",
    password: "user5pass",
  },
  {
    username: "user6",
    github: "user6",
    email: "user6@gmail.com",
    password: "user6pass",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;