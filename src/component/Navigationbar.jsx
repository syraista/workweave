import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';
import '../css/navbarandfooter.css';

export default function Navigationbar(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" id="navbarMain" className="bg-body-tertiary">
      <Navbar.Brand id="navbrand">
        <img className="navlogo" src="Logo_new.svg" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav id="navlinks" className="me-auto">
          <hr className="nav-divider" />
          {props.log === 0 ? (
            <>
              <Nav.Link className="navilink" onClick={handleShow}>
                Beranda
              </Nav.Link>
              <Nav.Link className="navilink" onClick={handleShow}>
                Proyek Saya
              </Nav.Link>
              <Nav.Link className="navilink" onClick={handleShow}>
                Notifikasi
              </Nav.Link>
              <Nav.Link className="navilink" onClick={handleShow}>
                Tanya
              </Nav.Link>
              <hr className="nav-divider" />
              <Button className="loginbuttons" id="loginbutton2" onClick={handleShow} variant="primary">
                Masuk
              </Button>
            </>
          ) : (
            <>
              <Nav.Link className={`navilink ${props.navn === 1 ? 'navactive' : ''}`} as={Link} to="/home">
                Beranda
              </Nav.Link>
              <Nav.Link className={`navilink ${props.navn === 2 ? 'navactive' : ''}`} as={Link} to="/Proyek">
                Proyek Saya
              </Nav.Link>
              <Nav.Link className={`navilink ${props.navn === 3 ? 'navactive' : ''}`} as={Link} to="/Notifikasi">
                Notifikasi
                {props.log === 1 && (
                  <div className="notif-container">
                    <img src="./assets/notif.png" alt="Notifikasi" className="notif-icon" />
                  </div>
                )}
              </Nav.Link>
              <Nav.Link className={`navilink ${props.navn === 4 ? 'navactive' : ''}`} as={Link} to="/FAQ">
                Tanya
              </Nav.Link>
              <hr className="nav-divider" />
              <Button className="loginbuttons mb-4" id="loginbutton2" as={Link} to="/Profile" variant="primary">
                <Image className="profimg" src="./assets/profile-dummy.png" roundedCircle alt="Profile" /> Hi, Raihan!
              </Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
      {props.log === 0 ? (
        <Button className="loginbuttons" id="loginbutton1" onClick={handleShow} variant="primary">
          Masuk
        </Button>
      ) : (
        <Button className="loginbuttons" id="loginbutton1" as={Link} to="/Profile" variant="primary">
          <Image className="profimg" src="./assets/profile-dummy.png" roundedCircle alt="Profile" /> Hi, Raihan!
        </Button>
      )}
      <Modal className="modal-lg" show={show} onHide={handleClose} centered>
        <Login handleClose={handleClose} />
      </Modal>
    </Navbar>
  );
}
