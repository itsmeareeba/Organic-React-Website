import React from 'react';
import WrapperSection from '../../Component/WrapperSection/WrapperSection';
import OtrHeader from "../../Component/OtrHeader/Header";
import Blog from '../../Component/Blog/Blog';
const BlogView = () => {
  return (
    <>
      <WrapperSection>
        <OtrHeader
         headname="BLOG"/>
        <Blog/>
      </WrapperSection>
    </>
  )
}

export default BlogView;
