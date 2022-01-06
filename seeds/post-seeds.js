const { Post } = require("../models");

const postData = [
  {
    title: "Title 1",
    content: "Content 1.",
    user_id: 1,
  },
  {
    title: "Title 2",
    content: "Content 2.",
    user_id: 2,
  },
  {
    title: "Title 3",
    content: "Content 3.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
