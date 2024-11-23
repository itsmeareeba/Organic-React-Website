import React from 'react';
import "./WrapperSection.css";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";

const WrapperSection = ({children}) => {
  return (
    <>
      <NavBar/>
        <main>
            {children}
        </main>
        <Footer/>
    </>
  )
}

export default WrapperSection
