"use client";

import React, { useRef, useState } from "react";
import styles from "../styles/swiper.module.scss";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperComponent() {
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
            <div className={styles.title}>CONNECTION</div>
          </div>
          <div className={styles.detail}>
            Connect with coaches directly, you can ping coaches to view profile.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles["title-layout"]}>
            <div className={styles["number-layout"]}>
              <div className={styles.number}>02</div>
              <div className={styles.underline} />
            </div>
            <div className={styles.title}>COLLABORATION</div>
          </div>
          <div className={styles.detail}>
            Work with other student athletes to  increase visability. When you
            share and like other players videos it will increase your visability
            as a player. This is the team work aspect to Surface 1.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles["title-layout"]}>
            <div className={styles["number-layout"]}>
              <div className={styles.number}>03</div>
              <div className={styles.underline} />
            </div>
            <div className={styles.title}>GROWTH</div>
          </div>
          <div className={styles.detail}>
            Resources and tools for you to get better as a student Athelte.
            Access to training classes, tutor sessions, etc 
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
