import BlockTitle from "./BlockTitle";
import Slider from "react-slick";
import "../styles/components/LatestBlogs.scss";

const LatestBlogs = ({ blogArticles }) => {
    return (
        <section className="blogs">
            <div className="wrapper">
                <BlockTitle main="Latest Blogs" sub="Our Latest Blogs/News" />

                {/* TODO: Finish the blog articles carousel */}
                <Slider className="slider" { ...settings } asNavFor={nav1} ref={(slider2) => setNav2(slider2)}>
                    {
                        blogArticles?.map((blog, index) => {
                            return (
                                <article className="slider-item" key={ index }>
                                    <img loading="lazy" alt={ opinion.personName } src={ require(`../assets/${opinion.personImage}`) } />
                                </article>
                            );
                        })
                    }
                </Slider>
            </div>
        </section>
    );
}

export default LatestBlogs;
