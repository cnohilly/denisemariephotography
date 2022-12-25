import React from 'react'
// import axios from 'axios';
// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
export default function Header() {



    return (
        <header className="sticky-top">
            <Navbar bg="gray" variant="dark" expand="md">
                <Container>
                    <NavLink to="/" className="nav-link">
                        <Navbar.Brand className="d-flex">
                            <img
                                src="/logo_1_white.png"
                                height="40"
                                alt="DeniseMariePhotography Logo"
                            />
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="" className="ms-auto nav-link">
                                Home
                            </NavLink>
                            <NavLink to="/albums" className="ms-auto nav-link">
                                Albums
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <button onClick={testFetch}>
                test
            </button> */}

        </header>
    )
}
