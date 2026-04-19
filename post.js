const post = {
    username: "Lumina",
    caption: "Life's blue on a Sunday Morning",
    likes: 21,
    comments: ["wow", "I relate", "Sunday blues"],
    addLike : function (){
        return this.likes += 1;
    }
}

let { username, caption } = post;

console.log(username);
console.log(caption);

post.addLike();
console.log(post.likes);