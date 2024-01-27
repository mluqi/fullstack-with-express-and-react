import './index.css';

import { Navbar, Container, Nav } from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import PostIndex from './pages/posts/index';
import PostCreate from './pages/posts/Create';
import PostEdit from './pages/posts/Edit';

function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand to="/">FITO MUSIK</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/' className='nav-link'>HOME</Nav.Link>
              <Nav.Link as={Link} to='/posts' className='nav-link'>LIST BARANG DAN STOK</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/posts' element={<PostIndex/>} />
        <Route exact path='/posts/create' element={<PostCreate/>} />
        <Route exact path='/posts/edit/:id' element={<PostEdit/>} />
      </Routes>

    </div>
  );
}

export default App;
