import { useState, useEffect } from "react";
import axios from 'axios';
import BlockTitle from "../components/BlockTitle";
import Button from "../components/Button";
import { FaArrowDown } from "react-icons/fa";

const About = () => {
    const [data, setData] = useState([]);
    const [amount, setAmount] = useState(1);
    const [error, setError] = useState("");
    
    useEffect(() => {
        fetchData(amount);
    }, []);

    function fetchData (amount) {
        if (!amount) return;

        axios.get(`https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=${amount}`)
        .then(response => {
            if (response.status === 200) {
                setData(response.data);
                console.log(response.data);
            }
        })
        .catch(err => {
            setError(err);
        });
    }

    return (
        <>
            <BlockTitle title="This is the facts page. Click on the Button to get a random fact about dogs!" />

            {
                (!error) ? (
                    data?.map((item, index) => {
                        return (<p style={{ marginBottom: '20px' }} key={index}>{ item.fact }</p>);
                    })
                ) : (<p>{ error }</p>)
            }

            <label className="search-label"><FaArrowDown />How many you wanna?<FaArrowDown /></label>
            <input className="search-input" type="number" onChange={ (e) => setAmount(e.target.value) } />
            <Button text="Get another fact" onClick={ () => fetchData(amount) } />
        </>
    );
}

export default About;