"use client";

import React, { useRef, useState } from "react";
import styles from "../styles/swiper.module.scss";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Content {
  athlets: { detail1: string; detail2: string; detail3: string };
  players: { detail1: string; detail2: string; detail3: string };
  title: { title1: string; title2: string; title3: string };
}

function SwiperComponent({
  isAthletes,
  content,
}: {
  isAthletes: boolean;
  content: Content;
}) {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className={styles["swiper-slide"]}
      >
        <SwiperSlide>
          <div className={styles["title-layout"]}>
            <div className={styles["number-layout"]}>
              <div className={styles.number}>01</div>
              <div className={styles.underline} />
            </div>
            <div className={styles.title}>{content.title.title1}</div>
          </div>
          <div className={styles.detail}>
            {isAthletes ? content.athlets.detail1 : content.players.detail1}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles["title-layout"]}>
            <div className={styles["number-layout"]}>
              <div className={styles.number}>02</div>
              <div className={styles.underline} />
            </div>
            <div className={styles.title}>{content.title.title2}</div>
          </div>
          <div className={styles.detail}>
            {isAthletes ? content.athlets.detail2 : content.players.detail2}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles["title-layout"]}>
            <div className={styles["number-layout"]}>
              <div className={styles.number}>03</div>
              <div className={styles.underline} />
            </div>
            <div className={styles.title}>{content.title.title3}</div>
          </div>
          <div className={styles.detail}>
            {isAthletes ? content.athlets.detail3 : content.players.detail3}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperComponent;
