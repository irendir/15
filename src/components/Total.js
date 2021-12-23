import {Button, Form} from "react-bootstrap";

function Total({total, Promocode, promocodeRef}) {

    return <>
        <h3>Total:</h3>
        <Form.Control size="xs" type="text" placeholder="Enter promo code" className={'mb-3'} ref={promocodeRef}/>
        <Button variant={'outline-secondary'} className={'mr-2'} size={'xs'} onClick={Promocode}>Apply</Button>
        {total}$
    </>
}

export default Total;