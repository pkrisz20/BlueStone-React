import { useParams } from "react-router-dom";

const About = () => {
    let { username } = useParams();

    return (
        <>
            <h1>
                This is the About page
            </h1>

            <h3>Params via router: { username }</h3>
        </>
    )
}

export default About;