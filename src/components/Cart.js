import {Button, Form} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import Login from './Login';
import Total from './Total';


function Cart({shopList, removeFromCart}) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(shopList.reduce((acc, el) => acc + el.price, 0));
    }, [shopList]);

    const promocodeRef = useRef(null);
    function Promocode() {
        let code = 'cristmas';
        let newTotal = setTotal(promocodeRef.current.value.toLowerCase() === code ? 
        (shopList.reduce((acc, el) => acc + el.price, 0))*0.8 : (shopList.reduce((acc, el) => acc + el.price, 0)));
        return newTotal
    }

    return <div className={'p-3 bg-light'} style={{border: '1px solid #c6c6c6',
        borderRadius: '.4rem', position: 'fixed', top: '10%', right: 0, zIndex: 3}}>
        <h2>Cart</h2>
        <ul style={{listStyleType: 'none'}}>
            {shopList.map(el => <li className={'my-3'} key={el.id}>{el.brand} {el.model} ({el.price.toFixed(2)}$)
                <Button variant={'danger'} className={'ml-2'} size={'sm'} onClick={() => removeFromCart(el.id)}>Remove</Button></li>)}
        </ul>
        <div className={'text-center'}>
            <Total promocodeRef={promocodeRef} total={total} Promocode={Promocode}/>
        </div>
        <Login />
    </div>
}

export default Cart;