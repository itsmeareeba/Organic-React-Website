import React from 'react';
import WrapperSection from '../../Component/WrapperSection/WrapperSection';
import FAQSection from '../../Component/FAQSection/FAQSection';
import OtrHeader from "../../Component/OtrHeader/Header";
const FaqView = () => {
  return (
    <>
      <WrapperSection>
        <OtrHeader
         headname="FAQ"/>
        <FAQSection/>
        
      </WrapperSection>
    </>
  )
}

export default FaqView
