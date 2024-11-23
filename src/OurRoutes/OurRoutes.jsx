import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeView from "../View/HomeSectionView/HomeView";
import FaqView from "../View/FaqView/FaqView";
import ContactView from "../View/ContactView/ContactView";
import ServiceView from "../View/ServiceView/ServiceView";
import AboutView from "../View/AboutView/AboutView";
import InitiativesVeiw from "../View/InitiativesVeiw/InitiativesVeiw";
import BlogView from "../View/BlogView/BlogView";
import NewsVeiw from "../View/NewsView/NewsVeiw";
import BlogDetail1View from "../View/BlogDetail1View/BlogDetail1View";
import NewsDetail1View from "../View/NewsDetail1View/NewsDetail1View";

const OurRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/Faq" element={<FaqView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/ServiceView" element={<ServiceView />} />
        <Route path="/About" element={<AboutView />} />
        <Route path="/Initiatives" element={<InitiativesVeiw />} />
        <Route path="/Blog" element={<BlogView />} />
        <Route path="/Blogdetail" element={<BlogDetail1View />} />
        <Route path="/News" element={<NewsVeiw />} />
        <Route path="/NewsDetail" element={<NewsDetail1View />} />
      </Routes>
    </>
  );
};

export default OurRoutes;
