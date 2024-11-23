import React from "react";
import WrapperSection from "../../Component/WrapperSection/WrapperSection";
import OtrHeader from "../../Component/OtrHeader/Header";
import BlogDetail1 from "../../Component/BlogDetail1/BlogDetail1";
const BlogDetail1View = () => {
  return (
    <>
      <WrapperSection>
        <OtrHeader headname="BLOG DETAIL" />
        <BlogDetail1 />
      </WrapperSection>
    </>
  );
};

export default BlogDetail1View;
