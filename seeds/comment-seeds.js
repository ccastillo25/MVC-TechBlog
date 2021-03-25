const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 5,
    comment_text: "This is awesome!",
  },
  {
    user_id: 4,
    post_id: 4,
    comment_text: "Lets Go!",
  },
  {
    user_id: 1,
    post_id: 4,
    comment_text: "Super Excited",
  },
  {
    user_id: 3,
    post_id: 5,
    comment_text: "Team work makes the dream work",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: "Global gym endorsed",
  },
  {
    user_id: 3,
    post_id: 4,
    comment_text: "Love it",
  },
  {
    user_id: 5,
    post_id: 3,
    comment_text: "Almost there",
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "If you aint first your last!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;