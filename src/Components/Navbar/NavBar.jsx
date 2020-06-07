import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../img/logo.png';

const NavBar = () => {
  return (
    <Navbar bg='danger' className='p-0'>
      <Navbar.Brand className='p-1 m-0'>
        <img
          src={logo}
          width={260}
          className='d-inline-block m-0 my-auto '
          alt='React Bootstrap logo'
        />
      </Navbar.Brand>
      <Navbar.Collapse className='justify-content-end mr-5'>
        <Navbar.Text
          style={{ fontSize: '3rem', margin: 0, padding: 0, color: 'black' }}
        >
          <a href='https://github.com/diegocamy'>
            <i className='lab la-github'></i>
          </a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
