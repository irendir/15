import {useState} from "react";
// import "./CountryItem.css";
import Button from 'react-bootstrap/Button';

function CountryItem({countries}) {
    const [count, setCount] = useState(0);

    return <div className={'country-prev-next py-3'}>
        <Button variant="primary" className={'mr-3'} disabled={count === 0}
                onClick={() => setCount(count - 1)}>Prev</Button>

        {countries.length && count >= 0 &&
        count < countries.length ? countries[count].name : 'Not Found'}

        <Button onClick={() => setCount(count + 1)} disabled={count === countries.length - 1}
                className={'ml-3'}>Next</Button>
    </div>;
}

export default CountryItem;