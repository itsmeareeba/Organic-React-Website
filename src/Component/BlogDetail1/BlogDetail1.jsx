import React from "react";
import "./BlogDetail1.css";

const BlogDetail1 = () => {
  const Blogdata = [
    {
      heading: "Impact of Climate Change on Vulnerable Communities in Pakistan",
      detail:
        "Climate change is now recognized as a significant threat to disaster relief efforts, particularly for vulnerable communities. Pakistan, ranked 18th out of 191 countries by the 2019 Inform Risk Index, faces one of the highest disaster risk levels globally. The nation's risk is primarily driven by its exposure to earthquakes, internal conflicts, and a range of climate-related hazards such as riverine, flash, and coastal flooding. Additionally, Pakistan is susceptible to tropical cyclones and droughts, further amplifying its vulnerability.",
    },
    {
      heading: "High Exposure to Natural Disasters and Social Vulnerability",
      detail:
        "According to the 2019 Inform Risk Index, Pakistan's exposure to natural disasters such as floods and earthquakes places it among the highest-risk nations globally. Alongside its environmental exposure, the country also ranks 37th in terms of social vulnerability, which is influenced by its high rates of multidimensional poverty. Vulnerable populations, especially those in poverty-stricken areas, bear a disproportionate share of the effects of climate change, struggling to prepare for and recover from disasters such as floods, heatwaves, and poor air quality.In 2022, Pakistan was hit by devastating floods, the largest in a decade, affecting 33 million people. Over 1,700 lives were lost, with many families displaced and infrastructure destroyed. A year later, the country faces similar threats, with the Sutlej River swelling to dangerous levels, prompting the evacuation of 100,000 people. Malnutrition, particularly among children, has surged, with 40% of young children in flood-affected areas experiencing stunted growth due to a lack of food and medical care.",
    },
    {
      heading: "Climate-Induced Disasters and Long-term Impacts",
      detail:
        "Pakistan's susceptibility to climate change presents strategic challenges. Rising temperatures have accelerated glacier melt in the north, while erratic monsoon patterns have caused unprecedented flooding. The United Nations Secretary-General, António Guterres, acknowledged the severity of these floods, stating that Pakistan is enduring the 'unrelenting effects' of extreme rains. The economic toll has been enormous, with over US$30 billion in damages. Finance Minister Miftah Ismail remarked on the scale of displacement, with 33 million people affected by these climate-induced disasters.",
    },
    {
      heading: "Water Crisis and Agricultural Vulnerability",
      detail:
        "Pakistan is among the top ten nations at 'high water risk,' with the agricultural sector accounting for 23% of the nation's GDP, being the hardest hit. Alarmingly, 80% of the population faces severe water shortages for at least one month each year. Groundwater resources, a last-resort water supply, are being rapidly depleted. Projections suggest that Pakistan could run out of water by 2025 unless decisive action is taken.Pakistan's agricultural sector is critical to its economy, employing 42% of the workforce. However, poor water management has resulted in the wastage of over one-third of the country's water supply. The Indus Water Treaty, established in 1962, granted Pakistan water rights, but per capita water availability has since plummeted, dropping from 5,229 cubic meters in 1962 to just 1,187 cubic meters in 2017. With the population expected to surpass 366 million by 2050, water demand will exceed supply, further threatening the nation’s food security and economic stability.",
    },
    {
      heading: "Rapid Population Growth and Environmental Strain",
      detail:
        "Pakistan's population explosion is another major driver of environmental degradation. From 32.5 million people at the time of independence in 1947, the population surged to 225 million by 2021. This rapid growth places enormous pressure on natural resources, leading to increased pollution and CO2 emissions. While Pakistan’s contribution to global emissions remains relatively low, it is disproportionately affected by the consequences of climate change.In 2022, Pakistan witnessed extreme weather conditions that resulted in massive infrastructural damage, significant economic losses, and the deaths of over 1,600 people. The country’s minister for Climate Change, Sherry Rehman, described the floods as 'a catastrophe of unknown precedent,' leaving one-third of the country submerged in water. These events underscore the pressing need for global cooperation and robust climate action to protect vulnerable nations like Pakistan from the growing impacts of climate change.Climate change has exacerbated Pakistan's vulnerability to natural disasters, water scarcity, and agricultural challenges. With millions of lives at risk and the economy suffering from repeated climate-induced catastrophes, urgent measures are needed to mitigate the effects of climate change. National and international cooperation, coupled with improved water management, disaster preparedness, and investment in sustainable agriculture, is essential to safeguard the future of Pakistan’s vulnerable communities.",
    },
  ];
  return (
    <>
      <div className="blog-img-otr">
        <div className="col-lg-4 col-blog-detail-otr">
          <div
            className="col-blog-detail-inr"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            {Blogdata.map((data, i) => (
              <div
                className="lower-about1"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <p className="head">{data.heading}</p>
                <p className="News-detail">{data.detail}</p>
              </div>
            ))}
            <ul
              className="heading3-ul ul-ref-blog-detail"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <p className="heading3-head">References</p>
              <li className="heading3-li">
                <p className="heading3-p ">
                  Climate Change and Water Crises in Pakistan: Implications on
                  Water Quality and Health Risks - PMC (nih.gov)
                </p>
              </li>
              <li className="heading3-li">
                <p className="heading3-p ">
                  EPA Report Shows Disproportionate Impacts of Climate Change on
                  Socially Vulnerable Populations in the United States | US EPA
                </p>
              </li>
              <li className="heading3-li">
                <p className="heading3-p ">
                  Pakistan - Vulnerability | Climate Change Knowledge Portal
                </p>
              </li>
            </ul>
          </div>
        </div>
        <img
          className="blogdetail-img"
          src="https://plus.unsplash.com/premium_photo-1663013515332-262f3b2e0908?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </>
  );
};

export default BlogDetail1;
