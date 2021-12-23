import {Button} from 'react-bootstrap';

function Country({country, check}) {
    return (<tr>
        <td>{country.name}</td>
        <td>{country.capital}</td>
        <td>{country.population}</td>
        <td>
            <Button variant='success'
                onClick={() => check(country.alpha3Code)}>Check {country.checked ? '(checked)' : ''}</Button>
        </td>
    </tr>);
}

export default  Country;