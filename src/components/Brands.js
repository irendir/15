import {Form} from 'react-bootstrap';
import {useEffect, useState} from "react";

function Brands({brandList}) {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        let unique = brandList.filter((v, i, a) => a.indexOf(v) === i);
        setBrands(unique);
    }, [brandList])
    return <Form.Select>
        <option value=''>Not Selected</option>
        {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
    </Form.Select>
}

export default Brands;