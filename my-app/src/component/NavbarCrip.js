import React from 'react';
import {Navbar,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import bitcoin from '../gif/bitcoin.webp'
const NavbarCrip = () => {
    const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return (
        <div >
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="d-flex container ">
  <Navbar.Brand><img src={bitcoin} alt='navlogo'/></Navbar.Brand>
  <Button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"  onClick={handleShow}>
  <span className="navbar-toggler-icon"></span>
      </Button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <Button type="button" className="badge bg-success position-relative"></Button>
     
    </div>
  </div>
</nav>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>welcome to nicki crypto</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Button type="button" className="badge bg-success position-relative">
    
</Button>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/signupform">SignUp</Link>
        </li>
      </ul>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    );
};

export default NavbarCrip;
