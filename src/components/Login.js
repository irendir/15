import {Button, Form} from "react-bootstrap";
import {useRef} from "react";

function Login() {
    const loginRef = useRef(null);
    const passwordRef = useRef(null);
    const defaultUserName = 'admin';
    function logOn() {
        console.log(123, loginRef.current.value, passwordRef.current.value);
    }

    return <div>
        <h3>Log on</h3>
        <Form.Control size="sm" type="text" placeholder="Username" className={'mb-3'} ref={loginRef} defaultValue={defaultUserName}/>
        <Form.Control size="sm" type="password" placeholder="Password" className={'mb-3'} ref={passwordRef}/>
        <Button variant={'success'} size={'sm'} onClick={logOn}>Show Input Value</Button>
    </div>
}

export default Login;