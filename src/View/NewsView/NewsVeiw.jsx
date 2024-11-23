import React from 'react';
import WrapperSection from '../../Component/WrapperSection/WrapperSection';
import OtrHeader from "../../Component/OtrHeader/Header";
import News from '../../Component/News/News';

const NewsVeiw = () => {
  return (
    <>
      <WrapperSection>
        <OtrHeader
         headname="NEWS"/>
         <News/>
      </WrapperSection> 
    </>
  )
}

export default NewsVeiw
