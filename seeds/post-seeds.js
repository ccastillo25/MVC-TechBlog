const { Post } = require('../models');

const postData = [
    {
        title: "The Dodgers are the 2020 World Series Champions!",
        post_content: "Not since the 1988 season, the Dodgers are at the top of the Baseball world!",
        user_id: 3
    },
    {
        title: "Count is now 7!",
        post_content: "After leading the Tampa Bay Bucs to a win over the Kansas City Chiefs, Tom Brady now has more Titles the any franchise in the NFL.",
        user_id: 1
    },
    {
        title: "Real Madrid still in it?",
        post_content: "Can last years Champions make a challenge against league leaders Athletico Madrid, with only 6 points seperating them?",
        user_id: 2

    },
    {
        title: "The Los Angeles Lakers tie the Boston Celtics",
        post_content: "After winning the NBA finals the Lakers tie the Celtics for the franchise with the most titles at 17.",
        user_id: 5
    },
    {
        title: "The USMNT",
        post_content: "After a easy 4-1 win over Jamaica the USMNT look ready to go for the gold cup.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;