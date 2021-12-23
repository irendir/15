import CountryItem from "./CountryItem";
import {Form, Table} from "react-bootstrap";
import Country from "./Country";
import {useEffect, useState} from "react";
import axios from "axios";

function Countries() {
    let [countries, setCountries] = useState([]);
    let [filteredCountries, setFilteredCountries] = useState([]);
    let [searchValue, setSearchValue] = useState('');

    function check(code) {
        let newCountries = countries.map(country => {
            if(country.alpha3Code === code) {
                return {...country, checked: true};
            } else {
                return {...country, checked: false};
            }
        });
        setCountries(newCountries);
    }

    function search(e) {
        let searchValue = e.currentTarget.value.toLowerCase();
        setFilteredCountries(countries.filter(country => {
            return country.name.toLowerCase().indexOf(searchValue) > -1 ||
                country.capital?.toLowerCase()?.indexOf(searchValue) > -1;
        }));
        setSearchValue(searchValue);
    }

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all').then(res =>  {
            console.log(res.data);
            let mapped = res.data.map(country => ({
                name: country.name,
                capital: country.capital,
                population: country.population,
                alpha3Code: country.alpha3Code
            }))
            setCountries(mapped);
        })
    }, [])


    return <>
        <CountryItem countries={countries}/>
        <Form.Control size="lg" type="text" placeholder="Search"
                      className={'mb-3'} onKeyUp={search} />
        <Table striped bordered hover>
            <thead>
            <tr><th>Name</th><th>Capital</th><th>Population</th><th></th></tr>
            </thead>
            <tbody>
            {searchValue ?
                filteredCountries.map(country => <Country key={country.alpha3Code}
                                                          country={country} check={check}/>) :
                countries.map(country => <Country key={country.alpha3Code}
                                                  country={country} check={check}/>)}
            </tbody>

        </Table>
    </>
}

export default Countries;