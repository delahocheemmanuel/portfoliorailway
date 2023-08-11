import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './main.css';

function Main() {
  const navigate = useNavigate();

  // Redirect to the /Home page on component mount
  useEffect(() => {
    navigate('/Home');
  }, [navigate]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
