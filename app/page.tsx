import Image from "next/image";
import styles from "./styles/page.module.scss";
import Swiper from "./components/SwiperComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <section className={styles.section}>
          <div className={styles["athlets-image-container"]}>
            <Image src="/athlets.png" alt="athlets" fill />
            <div className={styles.line3}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="223"
                height="238"
                viewBox="0 0 223 238"
                fill="none"
              >
                <path
                  d="M2.53711 235.699L220.234 1.98235"
                  stroke="#936EEA"
                  strokeWidth="5"
                />
              </svg>
            </div>
          </div>
          <div className={styles.plus4}>
            <Image src="/Rectangle 34.svg" alt="plus4" fill />
          </div>
          <div className={styles.plus5}>
            <Image src="/Rectangle 34 Copy.svg" alt="plus5" fill />
          </div>

          <div className={styles["content-wrapper"]}>
            <div className={styles.content}>
              <div className={styles.header}>ATHLETS</div>
              <div className={styles["title-layout"]}>
                <div className={styles["number-layout"]}>
                  <div className={styles.number}>01</div>
                  <div className={styles.underline} />
                </div>
                <div className={styles.title}>CONNECTION</div>
              </div>
              <div className={styles.detail}>
                Connect with coaches directly, you can ping coaches to view
                profile.
              </div>
            </div>
          </div>

          <div className={styles["content-wrapper-second"]}>
            <div className={styles.content}>
              <div className={styles["title-layout-second"]}>
                <div className={styles["number-layout"]}>
                  <div className={styles.number}>02</div>
                  <div className={styles["underline-second"]} />
                </div>
                <div className={styles.title}>COLLABORATION</div>
              </div>
              <div className={styles.detail2}>
                Work with other student athletes to  increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </div>
            </div>
            <Swiper />
          </div>

          <div className={styles["content-wrapper-third"]}>
            <div className={styles.content}>
              <div className={styles["title-layout-second"]}>
                <div className={styles["number-layout"]}>
                  <div className={styles.number}>03</div>
                  <div className={styles["underline-white"]} />
                </div>
                <div className={styles.title}>GROWTH</div>
              </div>
              <div className={styles.detail3}>
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc 
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles["players-image-container"]}>
            <Image src="/players.png" alt="players" fill />
            <div className={styles.line1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 271 316"
                fill="none"
              >
                <path d="M2.89062 313.16L268.516 2" stroke="#936EEA" />
              </svg>
            </div>
            <div className={styles.line2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 268 309"
                fill="none"
              >
                <path d="M3.13281 306.957L265.648 2.83984" stroke="#936EEA" />
              </svg>
            </div>
            <div className={styles.plus1}>
              <Image src="/Rectangle 34.svg" alt="plus1" fill />
            </div>
            <div className={styles.plus2}>
              <Image src="/Rectangle 34 Copy.svg" alt="plus2" fill />
            </div>
            <div className={styles.plus3}>
              <Image src="/Rectangle 34.svg" alt="plus3" fill />
            </div>
          </div>

          <div className={styles["players-content-wrapper"]}>
            <div className={styles["players-content"]}>
              <div className={styles.header2}>PLAYERS</div>
              <div className={styles["players-title-layout"]}>
                <div className={styles["number-layout"]}>
                  <div className={styles.number}>01</div>
                  <div className={styles.underline} />
                </div>
                <div className={styles.title}>CONNECTION</div>
              </div>
              <div className={styles["players-detail"]}>
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </div>
            </div>
          </div>

          <div className={styles["players-content-wrapper-second"]}>
            <div className={styles["players-content-second"]}>
              <div className={styles["players-title-layout-second"]}>
                <div className={styles["number-layout"]}>
                  <div className={styles.number}>02</div>
                  <div className={styles["underline-second"]} />
                </div>
                <div className={styles.title}>COLLABORATION</div>
              </div>
              <div className={styles["players-detail-2"]}>
                Work with recruiter to increase your chances of finding talented
                athlete.
              </div>
            </div>
          </div>

          <div className={styles["players-content-wrapper-third"]}>
            <div className={styles["players-content-second"]}>
              <div className={styles["players-title-layout-third"]}>
                <div className={styles["number-layout"]}>
                  <div className={styles.number2}>03</div>
                  <div className={styles["underline-white"]} />
                </div>
                <div className={styles.title}>GROWTH</div>
              </div>
              <div className={styles["players-detail-3"]}>
                Save your time, recruit proper athlets for your team.
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
