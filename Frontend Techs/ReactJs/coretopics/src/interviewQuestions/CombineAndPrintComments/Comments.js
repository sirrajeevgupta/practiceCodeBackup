//?Use a dummy API JSON to combine and print comments based on their unique ID.
/* 🧩 Problem statement
You have:
A list of posts
A list of comments
Each comment has a postId
👉 Goal: Combine comments with their respective posts using the unique ID */

const Comments = () => {

    const posts = [
        { id: 1, title: "Post One" },
        { id: 2, title: "Post Two" }
    ];

    const comments = [
        { id: 101, postId: 1, text: "Nice post!" },
        { id: 102, postId: 1, text: "Very helpful" },
        { id: 103, postId: 2, text: "Good read" }
    ];

    const updatedPosts = posts.map(post => {
        return { ...post, comments: comments.filter(comment => comment.postId === post.id) }
    })

    console.log(updatedPosts)
    return (
        <div>
            <ul>
                {updatedPosts && updatedPosts.map(post => (
                    <li key={post.id} >
                        {post.title}
                        <ul style={{ marginLeft: "1rem", marginBottom: "1rem", fontSize: "0.8rem" }}>
                            {post.comments && post.comments.map(comment => (
                                <li key={comment.id}>{comment.text}</li>
                            ))}
                        </ul>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default Comments