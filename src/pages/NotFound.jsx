import { useNavigate } from "react-router-dom";

const NotFound = () => {
    let navigate = useNavigate();

    return (
        <>
            <h1>404</h1>
            <h3>NOT FOUND</h3>
            <button className="btn" onClick={ () => navigate("/") }>Back to Home Page</button>
        </>
    )
}

export default NotFound;
