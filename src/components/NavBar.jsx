import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className='navBar'>
            <Navbar bg="warning" variant='light' expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img src='https://i.ibb.co/3MFK3LQ/logo.png' alt='logo brand' className='logoBrand' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto linksMenu">
                            <NavLink className='links' to='/'><span>INICIO</span></NavLink>
                            <NavLink className='links' to='/categorias/Guerrero Z'><span>GUERREROS Z</span></NavLink>
                            <NavLink className='links' to='/categorias/Dios de la destruccion'><span>DIOSES</span></NavLink>
                            <NavLink className='links' to='/categorias/Angel'><span>ANGELES</span></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
