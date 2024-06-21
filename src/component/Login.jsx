import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Buttonelement from './element/Buttonelement';
import { Link } from 'react-router-dom';
import '../css/loginregist.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="logmain">
      <img src="assets/login.png" alt="Background" />
      {isLogin ? (
        <Form className="login-form">
          <h1 className="mb-4 logtitle">
            Selamat datang kembali <br />
            di <span>Work Weave</span>
          </h1>
          <Form.Group controlId="formBasicText" className="mb-2">
            <Form.Control type="text" placeholder="Nama Pengguna" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Kata Sandi" />
          </Form.Group>
          <div className="d-flex justify-content-end align-items-center mb-2">
            <Link className="forgot-password" to="/forgot-password">
              Lupa Password?
            </Link>
          </div>
          <Link className="linkfix" to="/home">
            <Buttonelement width={'100%'} fw={400} br={'5px'} content={'MASUK'} bgColor="#1F79E5"/>
          </Link>
          <div className="social-login">
            <div className="divider">
              <hr className="left" /> <span>ATAU</span> <hr className="right" />
            </div>
            <div className="social-icons">
              <img src="assets/google.png" alt="Google Login" />
              <img src="assets/facebook.png" alt="Facebook Login" />
              <img src="assets/apple.png" alt="Apple Login" />
            </div>
            <div className="register-link text-center">
              Baru di Work Weave? <span onClick={toggleForm} className="toggle-link">Buat akun baru</span>
            </div>
          </div>
        </Form>
      ) : (
        <Form className="register-form">
          <h1 className="mb-4 logtitle">
            Daftar ke <span>Work Weave</span>
          </h1>
          <Form.Group controlId="formFullName" className="mb-2">
            <Form.Control type="text" placeholder="Nama Lengkap" />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-2">
            <Form.Control type="email" placeholder="Alamat Email" />
          </Form.Group>

          <Form.Group controlId="formUsername" className="mb-2">
            <Form.Control type="text" placeholder="Nama Pengguna" />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-2">
            <Form.Control type="password" placeholder="Kata Sandi" />
          </Form.Group>

          <Form.Group controlId="formAgreement" className="mb-2">
            <Form.Check type="checkbox" label="Dengan mendaftar, saya menyetujui syarat dan ketentuan Work Weave" />
          </Form.Group>

          <Link className="linkfix" to="/home">
            <Buttonelement width={'100%'} fw={400} br={'5px'} content={'DAFTAR'} bgColor="#1F79E5"/>
          </Link>

          <div className="social-login">
            <div className="divider">
              <hr className="left" /> <span>ATAU</span> <hr className="right" />
            </div>
            <div className="social-icons">
              <img src="assets/google.png" alt="Google Login" />
              <img src="assets/facebook.png" alt="Facebook Login" />
              <img src="assets/apple.png" alt="Apple Login" />
            </div>
            <div className="register-link text-center">
              Sudah punya akun? <span onClick={toggleForm} className="toggle-link">Masuk</span>
            </div>
          </div>
        </Form>
      )}
    </div>
  );
};

export default Login;
