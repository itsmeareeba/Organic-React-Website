import React from 'react';
import WrapperSection from '../../Component/WrapperSection/WrapperSection';
import OtrHeader from "../../Component/OtrHeader/Header";
import ContactSection from '../../Component/ContactSection/ContactSection';

const ContactView = () => {
  return (
    <>
       <WrapperSection>
        <OtrHeader
         headname="CONTACT US"/>
        <ContactSection/>
      </WrapperSection>
    </>
  )
}

export default ContactView
