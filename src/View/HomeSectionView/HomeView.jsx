import React from "react";
import HeroSection from "../../Component/HeroSection/HeroSection";
// import FAQSection from "../../Component/FAQSection/FAQSection";
import FeatureSection from "../../Component/FeatureSection/FeatureSection";
import HomeContent from "../../Component/HomeContent/HomeContent";
import WrapperSection from "../../Component/WrapperSection/WrapperSection";
import whatWeDo from "../../Images/image-what we do.svg";
import OurVision from "../../Images/image-our-plan.svg";
import ourImpact from "../../Images/image-ourImpact.svg";
import SwiperSection from "../../Component/SwiperSection/SwiperSection";
import HomeContent2 from "../../Component/HomeContent2/HomeContent2";

const DashboardView = () => {
  return (
    <div>
      <WrapperSection>
        <HeroSection />
        <SwiperSection />
        <HomeContent
          class="row-custom-hContent"
          heading="Who We Are"
          image={whatWeDo}
          detail="At Organica, we are dedicated to revolutionizing agriculture through sustainable practices and empowering women farmers. We combine regenerative farming techniques with modern digital tools to create a future where farming is eco-friendly, inclusive, and efficient."
        />
        <HomeContent2
          class="row-custom-hContent reverse"
          heading="Our Vision"
          image={OurVision}
          detail="We envision a world where sustainable agriculture and gender equality go hand in hand. Our goal is to empower women to lead the shift toward greener farming, using innovative practices that benefit both the environment and their communities."
        />
        <HomeContent
          class="row-custom-hContent"
          heading="Our Impact"
          image={ourImpact}
          detail="Through our workshops, training programs, and organic product initiatives, we have empowered countless women farmers to adopt regenerative agriculture. By helping farmers improve their practices and livelihoods, we are fostering sustainable growth at the grassroots level"
        />
        <FeatureSection />
        {/* <FAQSection /> */}
      </WrapperSection>
    </div>
  );
};

export default DashboardView;
