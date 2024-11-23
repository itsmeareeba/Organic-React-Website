import React from "react";
import WrapperSection from "../../Component/WrapperSection/WrapperSection";
import OtrHeader from "../../Component/OtrHeader/Header";
import About from "../../Component/About/About";
import aboutImg1 from "../../Images/AboutImg1.png";
import aboutImg2 from "../../Images/AboutImg2.png";
import aboutImg3 from "../../Images/AboutImg3.png";
import HomeContent from "../../Component/HomeContent/HomeContent";
import HomeContent2 from "../../Component/HomeContent2/HomeContent2";
const AboutView = () => {
  return (
    <>
      <WrapperSection>
        <OtrHeader headname="About" />
        <HomeContent
          class="row-custom-hContent"
          heading="Our Story"
          image={aboutImg1}
          detail=" Organica began with a vision to transform agriculture by
                    making it more sustainable and inclusive. Our founders
                    recognized the potential of women in rural farming
                    communities and the urgent need for greener agricultural
                    practices. By combining these two powerful forces, Organica
                    was born, a movement dedicated to regenerative agriculture,
                    empowering women farmers, and digitalizing green farming.
                    Today, we stand at the crossroads of tradition and
                    innovation, bringing the best of both worlds to the farming
                    industry."
        />
        <HomeContent2
          class="row-custom-hContent reverse"
          heading="Our Impact"
          image={aboutImg2}
          detail="     Since our inception, Organica has touched the lives of
                    hundreds of women farmers, helping them grow their skills,
                    improve their yields, and create healthier products. By
                    providing hands-on training, access to organic markets, and
                    the latest farming technologies, we are proud to contribute
                    to greener agriculture and stronger communities."
        />
        <HomeContent
          class="row-custom-hContent"
          heading="Our Vision for the Future"
          image={aboutImg3}
          detail="  We aim to scale our efforts, empowering even more women
                    farmers, enhancing sustainable farming practices across
                    regions, and expanding our marketplace for organic products.
                    Our vision is a world where farming nurtures both people and
                    the planet, with women leading the way to a healthier,
                    greener tomorrow."
        />
        <About />
      </WrapperSection>
    </>
  );
};

export default AboutView;
