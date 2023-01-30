import "../styles/components/Post.scss";

const Post = ({ mainTitle, subTitle, descAbove, descBelow }) => {
    return (
        <section className="post">
            <div className="wrapper">
                <div className="post-titles">
                    <h2 className="post-titles-main">{ mainTitle }</h2>
                    <h3 className="post-titles-sub">{ subTitle }</h3>
                </div>
                <div className="post-content">
                    <p className="post-content-desc">{ descAbove }</p>
                    <p className="post-content-desc">{ descBelow }</p>
                    <a href="/" className="post-content-link">Read more <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </section>
    );
}

export default Post;
