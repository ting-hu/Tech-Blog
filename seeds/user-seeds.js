const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = [
  {
    username: "User1",
    password: "user1",
  },
  {
    username: "User2",
    password: "user2",
  },
  {
    username: "User3",
    password: "user3",
  },
  {
    username: "User4",
    password: "user4",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
