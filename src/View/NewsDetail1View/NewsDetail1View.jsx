import React from "react";
import WrapperSection from "../../Component/WrapperSection/WrapperSection";
import OtrHeader from "../../Component/OtrHeader/Header";
import NewsDetail1 from "../../Component/NewsDetail1/NewsDetail1";
const NewsDetail1View = () => {
  return (
    <>
      <WrapperSection>
        <OtrHeader headname="NEWS DETAIL" />
        <NewsDetail1 />
      </WrapperSection>
    </>
  );
};

export default NewsDetail1View;
