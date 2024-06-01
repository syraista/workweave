import { Form} from 'react-bootstrap';
import Buttonelement from './element/Buttonelement';
import { Link } from 'react-router-dom';
import '../css/loginregist.css'

const Login = () => {
    return (
        <div className='logmain'>
            <img src='assets/login.png' />
            <Form>
                <h1 className='mb-4 logtitle'>Selamat datang kembali <br/>di <span>Work Weave</span></h1>
                <Form.Group controlId="formBasicText" className='mb-4'>
                    <Form.Control type="text" placeholder="Nama Pengguna" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Link className="linkfix" to="/home"><Buttonelement width={"100%"} fw={400} br={"5px"} content={"Login"}/></Link>
            </Form>
        </div>
    );
};

export default Login;
