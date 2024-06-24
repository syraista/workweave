import React, { useState } from "react";
import Cookies from "js-cookie";
import { Form, Spinner } from "react-bootstrap";
import Buttonelement from "./element/Buttonelement";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/loginregist.css";
import { loginRequest, registerRequest } from "../service/authRequest";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullName: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loginErrors, setLoginErrors] = useState({});
  const [registerErrors, setRegisterErrors] = useState({});

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateLoginForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email Pengguna diperlukan";
    if (!formData.password) newErrors.password = "Kata Sandi diperlukan";
    return newErrors;
  };

  const validateRegisterForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Nama Lengkap diperlukan";
    if (!formData.email) newErrors.email = "Alamat Email diperlukan";
    if (!formData.username) newErrors.username = "Nama Pengguna diperlukan";
    if (!formData.password) newErrors.password = "Kata Sandi diperlukan";
    return newErrors;
  };

  const handleLoginSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    const formErrors = validateLoginForm();
    if (Object.keys(formErrors).length > 0) {
      setLoginErrors(formErrors);
    } else {
      setIsLoading(true);
      try {
        const request = {
          email: formData.email,
          password: formData.password,
        };
        const response = await loginRequest(request);
        console.log("Login Successful:", response);
        Cookies.set("sessionId", response.data.sessionId, { expires: 1 });

        const userId = response.data.userId; // Adjust this based on the actual response
        const userResponse = await axios.get(
          `http://localhost:3000/api/user/${userId}`
        );
        const userData = userResponse.data.data[0]; // Adjust based on the actual response structure

        // Store user data in cookies
        Object.entries(userData).forEach(([key, value]) => {
          Cookies.set(key, value, { expires: 1 });
        });

        console.log(Cookies.get("sessionId"));
        console.log(Cookies.get("userData"));
        setIsLoading(false);

        // Redirect or further processing
        navigate("/home");
      } catch (error) {
        console.error("Login Failed:", error.message);
        setIsLoading(false);
      }
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateRegisterForm();
    if (Object.keys(formErrors).length > 0) {
      setRegisterErrors(formErrors);
    } else {
      setIsLoading(true);
      console.log(formData);
      try {
        const request = {
          email: formData.email,
          password: formData.password,
          name: formData.fullName,
          username: formData.username,
          role: formData.role,
        };
        const response = await registerRequest(request);
        console.log("Register Successful:", response);
        setIsLoading(false);
        // Redirect or further processing
        // navigate('/')
        setFormData({ username: "", password: "", fullName: "", email: "" });
        toggleForm();
      } catch (error) {
        console.error("Register Failed:", error.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="logmain">
      <img src="assets/login.png" alt="Background" />
      {isLogin ? (
        <Form className="login-form" onSubmit={handleLoginSubmit}>
          <h1 className="mb-4 logtitle">
            Selamat datang di <span>Work Weave</span>
          </h1>
          <Form.Group controlId="formBasicText" className="mb-2">
            <Form.Control
              type="text"
              placeholder="Email Pengguna"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              isInvalid={!!loginErrors.email}
            />
            <Form.Control.Feedback type="invalid">
              {loginErrors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Kata Sandi"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              isInvalid={!!loginErrors.password}
            />
            <Form.Control.Feedback type="invalid">
              {loginErrors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Buttonelement
            width={"100%"}
            fw={400}
            br={"5px"}
            content={"MASUK"}
            bgColor="#1F79E5"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Spinner animation="border" size="sm" /> : "MASUK"}
          </Buttonelement>
          <div className="social-login">
            <div className="divider">
              <hr className="left" /> <hr className="right" />
            </div>
            <div className="register-link text-center">
              Baru di Work Weave?{" "}
              <span onClick={toggleForm} className="toggle-link">
                Buat akun baru
              </span>
            </div>
          </div>
        </Form>
      ) : (
        <Form className="register-form" onSubmit={handleRegisterSubmit}>
          <h1 className="mb-4 logtitle">
            Daftar ke <span>Work Weave</span>
          </h1>
          <Form.Group controlId="formFullName" className="mb-2">
            <Form.Control
              type="text"
              placeholder="Nama Lengkap"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              isInvalid={!!registerErrors.fullName}
            />
            <Form.Control.Feedback type="invalid">
              {registerErrors.fullName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-2">
            <Form.Control
              type="email"
              placeholder="Alamat Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              isInvalid={!!registerErrors.email}
            />
            <Form.Control.Feedback type="invalid">
              {registerErrors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formUsername" className="mb-2">
            <Form.Control
              type="text"
              placeholder="Nama Pengguna"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              isInvalid={!!registerErrors.username}
            />
            <Form.Control.Feedback type="invalid">
              {registerErrors.username}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-2">
            <Form.Control
              type="password"
              placeholder="Kata Sandi"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              isInvalid={!!registerErrors.password}
            />
            <Form.Control.Feedback type="invalid">
              {registerErrors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formRoles" className="mt-4">
            <Form.Label>Pilih Role</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="Client"
                name="role"
                value="client"
                checked={formData.role === "client"}
                onChange={handleInputChange}
              />
              <Form.Check
                inline
                type="radio"
                label="Worker"
                name="role"
                value="worker"
                checked={formData.role === "worker"}
                onChange={handleInputChange}
              />
            </div>
          </Form.Group>

          <Buttonelement
            width={"100%"}
            fw={400}
            br={"5px"}
            content={"DAFTAR"}
            bgColor="#1F79E5"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Spinner animation="border" size="sm" /> : "DAFTAR"}
          </Buttonelement>

          <div className="social-login">
            <div className="divider">
              <hr className="left" /> <hr className="right" />
            </div>
            <div className="register-link text-center">
              Sudah punya akun?{" "}
              <span onClick={toggleForm} className="toggle-link">
                Masuk
              </span>
            </div>
          </div>
        </Form>
      )}
    </div>
  );
};

export default Login;
