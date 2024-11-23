import React from "react";
import HomeContent from "../../Component/HomeContent/HomeContent";
import WrapperSection from "../../Component/WrapperSection/WrapperSection";
import Workshops from "../../Images/pexels-kelly-1179532-2321839.jpg";
import OurVision from "../../Images/pexels-jonathanborba-15672380.jpg";
import ourImpact from "../../Images/philippe-baret-IMkfZsEX5Lk-unsplash.jpg";
import OtrHeader from "../../Component/OtrHeader/Header";
import HomeContent2 from "../../Component/HomeContent2/HomeContent2";
const InitiativesVeiw = () => {
  return (
    <>
      <WrapperSection>
        <OtrHeader headname="Initiatives " />
        <HomeContent
          class="row-custom-hContent"
          heading="Regenerative Agriculture Workshops"
          image={Workshops}
          detail="We conduct workshops focused on teaching farmers, especially women, the principles of regenerative agriculture. By improving soil health, enhancing biodiversity, and reducing the reliance on chemical inputs, we’re helping farmers create more resilient ecosystems and sustainable income streams."
        />
        <HomeContent2
          class="row-custom-hContent reverse"
          heading="Women Farmer Empowerment"
          image={OurVision}
          detail="At the heart of Organica lies our commitment to empowering women. Our initiative provides women with the training, tools, and resources to lead in regenerative agriculture, making them key contributors to sustainable farming practices and ensuring gender equity in agriculture."
        />
        <HomeContent
          class="row-custom-hContent"
          heading="Green Product Marketplace"
          image={ourImpact}
          detail="Organica offers a dedicated platform where farmers can sell their organic produce directly to consumers. This not only creates a fair-trade environment but also supports small-scale women farmers by providing them with a reliable income stream while promoting healthy, organic products."
        />
      </WrapperSection>
    </>
  );
};

export default InitiativesVeiw;
