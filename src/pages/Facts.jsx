import { useState, useLayoutEffect } from "react";
import axios from 'axios';
import BlockTitle from "../components/BlockTitle";
import Button from "../components/Button";
import { FaArrowDown } from "react-icons/fa";

const Facts = () => {
    const [data, setData] = useState([]);
    const [amount, setAmount] = useState(1);
    const [error, setError] = useState("");
    
    useLayoutEffect(() => {
        fetchData(amount);
    }, []);

    function fetchData () {
        if (!amount) return;

        try {
            axios.get(`https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=${amount}`)
            .then(response => {
                if (response.status === 200) {
                    setData(response.data);
                }
            })
            .catch(err => {
                setError(err);
            });
        }
        catch(err) {
            console.log(err.message);
            return;
        }
    }

    return (
        <>
            <BlockTitle title="This is the facts page. Click on the Button to get a random fact about dogs!" />

            {
                (!error) ? (
                    data?.map((item, index) => {
                        return (<p style={{ marginBottom: '20px' }} key={index}>{ item.fact }</p>);
                    })
                ) : (<h3 style={{ marginBottom: '20px', backgroundColor: 'red', padding: '10px', borderRadius: '10px', color: 'white' }}>Something went wrong. Please try it later...</h3>)
            }

            <label className="search-label"><FaArrowDown />How many fact you wanna get?<FaArrowDown /></label>
            <input className="search-input" type="number" onChange={ (e) => setAmount(e.target.value) } />
            <Button text="Get another fact" style={{ textTransform: 'uppercase'}} onClick={ fetchData } />
        </>
    );
}

export default Facts;