import Hero from "../components/Hero";

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

    return (
        <>
            <Hero images={heroStuff} />
        </>
    );
}

export default Home;