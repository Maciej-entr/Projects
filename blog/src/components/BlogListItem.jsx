
function BlogListItem({post}) {
    return (
        <article className="post">
            <div className="post-content">
                <h2 className="post-content-title">{post.title}</h2>
                <p className="post-content-text">{post.body}</p>
                <div className="post-content-info">
                    <div>
                     <p> Likes: {post.reactions.likes}</p>
                    </div>
                    <div>
                    <p>views: {post.views}</p>
                    </div>
                </div>
                <div>{post.tags.map(tag => <button key={tag} className="post-tag">{tag}</button>)}</div>
            </div>
            <div>
                <img src={`https://dummyjson.com/icon/${post.id}/350`} alt={post.title} />
            </div>
        </article>
    );
}

export default BlogListItem;