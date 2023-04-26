import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
  return (
    <Navbar
      bg='primary'
      variant='dark'
      expand='lg'
      className='my-4 rounded d-flex flex-row'
    >
      <Container>
        <Navbar.Brand href='#home'>Waiter app</Navbar.Brand>
        <Nav className='ms-auto flex-row'>
          {' '}
          <Nav.Link as={NavLink} to='/' className='ms-2'>
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
