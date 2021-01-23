import React from "react";
import loadable from "@loadable/component";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import MapBlockContent from "../../content/MapBlockContent.json";

import paris from "../../common/Pictures/paris.jpg";
import parque2 from "../../common/Pictures/parque2.png";
import parque3 from "../../common/Pictures/parque3.png";
import parque5 from "../../common/Pictures/parque5.png";
import parque6 from "../../common/Pictures/parque6.png";

const ContactFrom = loadable(() => import("../../components/ContactForm"));
const ContentBlock = loadable(() => import("../../components/ContentBlock"));
const MiddleBlock = loadable(() => import("../../components/MiddleBlock"));
const Container = loadable(() => import("../../common/Container"));
const ScrollToTop = loadable(() => import("../../common/ScrollToTop"));
const MapComponent = loadable(() => import("../../components/MapComponent"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />

      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon={paris}
        id="intro"
      />

      {/* <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      /> */}

      <MapComponent title={MapBlockContent.title} />

      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />

      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon={parque6}
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon={parque3}
        id="mission"
      />

      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="register"
      />

      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon={parque5}
        id="product"
      />
    </Container>
  );
};

export default Home;
