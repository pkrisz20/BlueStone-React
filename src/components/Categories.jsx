import BlockTitle from "./BlockTitle";
import "../styles/components/Categories.scss";

const Categories = ({ categories }) => {
    return (
        <section className="categories">
            <div className="wrapper">
                <BlockTitle main="What We Do" sub="Best Exhibition Stall Designers in India, Europe and Poland" />

                <div className="categories-grid">
                    {
                        categories?.map((item, index) => {
                            return (
                                <article className="categories-grid-article" key={ index }>
                                    <div className="categories-grid-article-image">
                                        <picture>
                                            <img loading="lazy" alt={ item.title } src={ require('../assets/' + item.image) } />
                                        </picture>
                                    </div>
                                    <div className="categories-grid-article-text">
                                        <h4 className="title">{ item.title }</h4>
                                        { item.link && <a href="/" className="link">Know More <i className="fas fa-arrow-right"></i></a> }
                                    </div>
                                </article>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Categories;
