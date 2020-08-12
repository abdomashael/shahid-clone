import React, { useState } from "react";

import styles from "./carosal_main.module.css";
import CarouselSlider from "../carousel_slider/carousel_slider";
import SlideInfo from "../slide_info/slide_info";
import Section from "../section/section";
import { Row, Col } from "react-bootstrap";

const CarosalMain = (props) => {
  return (
    <div className={styles.carosalContainer}>
      <img alt="main" className={styles.myImage} src={props.mainImgSrc}></img>
      <div className={styles.gradinatBackground}>
        <div className={styles.gradinatBackgroundHorzintal}></div>
      </div>
      <div className={styles.mainDiv}>
        <Row>
          <Col md="6"></Col>
          <Col md="6" className={styles.mainContainer}>
            <div>
              <SlideInfo
                vipHidden={props.vipHidden}
                sessionHidden={props.sessionHidden}
                sessionNo={props.sessionNo}
                mainInfo={props.mainInfo}
                description={props.description}
                thumbnailSrc={props.thumbnailSrc}
              ></SlideInfo>
            </div>
          </Col>
        </Row>
        <CarouselSlider></CarouselSlider>
        
        
      </div>
      {/* <div className={styles.section}>
          <Section />
        </div> */}
    </div>
  );
};

CarosalMain.prototype = {};

CarosalMain.defaultProps = {
  sessionNo: "",
  mainInfo: "",
  description: "",
};

export default CarosalMain;
