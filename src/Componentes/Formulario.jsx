import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import {useState, userState} from 'react';

const Formulario = () => {

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    const [alerta, setAlerta] = useState ({ IsShown: true, msg:'',variant:''});


     
    const validarInput = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setAlerta({ isShown: true, msg: 'Debe rellenar toda la información', variant: 'warning' });
            return;
        } else if (email.trim() === 'user@desafiolatam.cl' && password.trim() === '123456') {
            setAlerta({ isShown: true, msg: 'Los datos ingresados son correctos', variant: 'info' });
            return;
        } else {
            setAlerta({ isShown: true, msg: 'El usuario o la contraseña ingresados son incorrectos.', variant: 'danger' });
            return;
        }

    }

    return (

        <Form onSubmit={validarInput}>
            {alerta.isShown ? <Alert key={alerta.variant} variant={alerta.variant}>{alerta.msg}</Alert> : null}

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="ejemplo@adl.com" />
                <Form.Text className="text-muted">
                 
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Contraseña" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordar" />
            </Form.Group>

            <Button variant="primary" type="submit" /* disabled={boton} */ >
                Iniciar Sesión
            </Button>

              </Form >
    );
}


export default Formulario;