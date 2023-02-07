import Hero from "../components/Hero";
import Post from "../components/Post";
import Categories from "../components/Categories";
import OurWorkComp from "../components/OurWorkComp";
import Opinions from "../components/Opinions";

const Home = () => {
    const heroStuff = [
        {
            title: 'Design. Create. and Build.',
            image: 'hero.png',
            desc: 'Exhibition trade stand designers and builders in Europe, UK, and throughout India. With twenty years of experience in exhibition field and know we started new Start-Up with our strong team.',
            buttons: 'Start Your Project'
        },
        {
            title: 'Innovation. Motivation. and Greatness.',
            image: 'hero2.png',
            desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            buttons: 'Start Your Business'
        },
        {
            title: 'List. Our Works. and Blogs.',
            image: 'hero3.png',
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            buttons: 'Go To List'
        }
    ];

    const categories = [
        {
            title: "Exhibitions Stall Design & Fabrications",
            image: "hero2.png",
            link: true
        },
        {
            title: "Booth Design & Build",
            image: "design.png",
            link: false
        },
        {
            title: "Digital Marketing",
            image: "hero3.png",
            link: false
        },
        {
            title: "Designing & Branding",
            image: "brand.png",
            link: false
        },
    ];

    const works = [
        {
            day: 28,
            month: "Nov",
            image: "work1.png",
            title: "Krystal Global Engineering Ltd.",
            place: "Dusseldorf, Germany",
            area: 32
        },
        {
            day: 9,
            month: "May",
            image: "work2.png",
            title: "WW2 exhibiton.",
            place: "Berlin, Germany",
            area: 18
        },
        {
            day: 12,
            month: "Sept",
            image: "work3.png",
            title: "Szent Istvan exhibition",
            place: "Budapest, Hungary",
            area: 120
        },
        {
            day: 4,
            month: "July",
            image: "hero2.png",
            title: "Independece Day.",
            place: "Florida, USA",
            area: 85
        }
    ];

    const opinions = [
        {
            quoteBig: "You are amazing! You worked so hard for Cady's wedding.",
            quoteSmall: "You are amazing! You worked so hard for Cady's wedding. You had every little detail under control you need to run my life!",
            personName: "David Warmer",
            position: "Founder",
            personImage: "brand1.png"
        }
    ];

    const brands = ["brand1.png", "brand2.png", "brand3.png", "brand4.png", "brand5.png", "brand6.png", "brand7.png"];

    return (
        <main>
            <Hero images={ heroStuff } />

            <Post mainTitle="BlueStone" subTitle="Design, Create and Build bespoke Exhibition Stall" descAbove="In the 20 Years of experience in Exhibition Stall Design and Installation field. Know we are own startup and  offering you Exclusive Range of Exhibition Stall and  Stand Design in India, Poland, Germany and Europe. We have built our business by taking the time to understand our clients objectives and creating a stand out solution in line with brand & budget." descBelow="We pride ourselves in providing a totally project-managed service, from start to finish. Our on-site team are able to install your unique stand before the show, ensuring that it achieves maximum impact and captivates your target market." />

            <Categories categories={ categories } />

            <OurWorkComp works={ works } />

            <Opinions brands={ brands } opinions={ opinions } />
        </main>
    );
}

export default Home;
