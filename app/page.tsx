import Image from "next/image";
import styles from "./styles/page.module.scss";
import SwiperComponent from "./components/SwiperComponent";

const content = {
  athlets: {
    detail1:
      "Connect with coaches directly, you can ping coaches to view profile.",
    detail2:
      "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
    detail3:
      "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc",
  },
  players: {
    detail1:
      "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
    detail2:
      "Work with recruiter to increase your chances of finding talented athlete.",
    detail3: "Save your time, recruit proper athlets for your team.",
  },
  title: { title1: "CONNECTION", title2: "COLLABORATION", title3: "GROWTH" },
};

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
                viewBox="0 0 223 238"
                fill="none"
              >
                <path d="M2.53711 235.699L220.234 1.98235" stroke="#936EEA" />
              </svg>
            </div>
            <div className={styles.plus4}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
              >
                <g opacity="0.3">
                  <mask
                    id="path-1-outside-1_0_265"
                    maskUnits="userSpaceOnUse"
                    x="0.630859"
                    y="0"
                    width="18"
                    height="17"
                    fill="black"
                  >
                    <rect fill="white" x="0.630859" width="18" height="17" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.43206 1C9.14483 1 8.91198 1.23285 8.91198 1.52008V8H2.13086C1.85472 8 1.63086 8.22386 1.63086 8.5C1.63086 8.77614 1.85472 9 2.13086 9H8.91198V15.4799C8.91198 15.7672 9.14483 16 9.43206 16C9.71929 16 9.95214 15.7672 9.95214 15.4799V9H16.7333C17.0094 9 17.2333 8.77614 17.2333 8.5C17.2333 8.22386 17.0094 8 16.7333 8H9.95214V1.52008C9.95214 1.23285 9.71929 1 9.43206 1Z"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.43206 1C9.14483 1 8.91198 1.23285 8.91198 1.52008V8H2.13086C1.85472 8 1.63086 8.22386 1.63086 8.5C1.63086 8.77614 1.85472 9 2.13086 9H8.91198V15.4799C8.91198 15.7672 9.14483 16 9.43206 16C9.71929 16 9.95214 15.7672 9.95214 15.4799V9H16.7333C17.0094 9 17.2333 8.77614 17.2333 8.5C17.2333 8.22386 17.0094 8 16.7333 8H9.95214V1.52008C9.95214 1.23285 9.71929 1 9.43206 1Z"
                    fill="#5C37B7"
                  />
                  <path
                    d="M8.91198 8V9H9.91198V8H8.91198ZM8.91198 9H9.91198V8H8.91198V9ZM9.95214 9V8H8.95214V9H9.95214ZM9.95214 8H8.95214V9H9.95214V8ZM9.91198 1.52008C9.91198 1.78513 9.69711 2 9.43206 2V0C8.59254 0 7.91198 0.680563 7.91198 1.52008H9.91198ZM9.91198 8V1.52008H7.91198V8H9.91198ZM2.13086 9H8.91198V7H2.13086V9ZM2.63086 8.5C2.63086 8.77614 2.407 9 2.13086 9V7C1.30243 7 0.630859 7.67157 0.630859 8.5H2.63086ZM2.13086 8C2.407 8 2.63086 8.22386 2.63086 8.5H0.630859C0.630859 9.32843 1.30243 10 2.13086 10V8ZM8.91198 8H2.13086V10H8.91198V8ZM9.91198 15.4799V9H7.91198V15.4799H9.91198ZM9.43206 15C9.69711 15 9.91198 15.2149 9.91198 15.4799H7.91198C7.91198 16.3194 8.59254 17 9.43206 17V15ZM8.95214 15.4799C8.95214 15.2149 9.16701 15 9.43206 15V17C10.2716 17 10.9521 16.3194 10.9521 15.4799H8.95214ZM8.95214 9V15.4799H10.9521V9H8.95214ZM16.7333 8H9.95214V10H16.7333V8ZM16.2333 8.5C16.2333 8.22386 16.4571 8 16.7333 8V10C17.5617 10 18.2333 9.32843 18.2333 8.5H16.2333ZM16.7333 9C16.4571 9 16.2333 8.77614 16.2333 8.5H18.2333C18.2333 7.67157 17.5617 7 16.7333 7V9ZM9.95214 9H16.7333V7H9.95214V9ZM8.95214 1.52008V8H10.9521V1.52008H8.95214ZM9.43206 2C9.16701 2 8.95214 1.78513 8.95214 1.52008H10.9521C10.9521 0.680563 10.2716 0 9.43206 0V2Z"
                    fill="#9173E6"
                    mask="url(#path-1-outside-1_0_265)"
                  />
                </g>
              </svg>
            </div>
            <div className={styles.plus5}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
              >
                <mask
                  id="path-1-outside-1_0_268"
                  maskUnits="userSpaceOnUse"
                  x="0.51416"
                  y="0"
                  width="18"
                  height="17"
                  fill="black"
                >
                  <rect fill="white" x="0.51416" width="18" height="17" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.31536 1C9.02813 1 8.79528 1.23285 8.79528 1.52008V8H2.01416C1.73802 8 1.51416 8.22386 1.51416 8.5C1.51416 8.77614 1.73802 9 2.01416 9H8.79528V15.4799C8.79528 15.7672 9.02813 16 9.31536 16C9.6026 16 9.83544 15.7672 9.83544 15.4799V9H16.6166C16.8927 9 17.1166 8.77614 17.1166 8.5C17.1166 8.22386 16.8927 8 16.6166 8H9.83544V1.52008C9.83544 1.23285 9.6026 1 9.31536 1Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.31536 1C9.02813 1 8.79528 1.23285 8.79528 1.52008V8H2.01416C1.73802 8 1.51416 8.22386 1.51416 8.5C1.51416 8.77614 1.73802 9 2.01416 9H8.79528V15.4799C8.79528 15.7672 9.02813 16 9.31536 16C9.6026 16 9.83544 15.7672 9.83544 15.4799V9H16.6166C16.8927 9 17.1166 8.77614 17.1166 8.5C17.1166 8.22386 16.8927 8 16.6166 8H9.83544V1.52008C9.83544 1.23285 9.6026 1 9.31536 1Z"
                  fill="#5C37B7"
                />
                <path
                  d="M8.79528 8V9H9.79528V8H8.79528ZM8.79528 9H9.79528V8H8.79528V9ZM9.83544 9V8H8.83544V9H9.83544ZM9.83544 8H8.83544V9H9.83544V8ZM9.79528 1.52008C9.79528 1.78513 9.58041 2 9.31536 2V0C8.47585 0 7.79528 0.680563 7.79528 1.52008H9.79528ZM9.79528 8V1.52008H7.79528V8H9.79528ZM2.01416 9H8.79528V7H2.01416V9ZM2.51416 8.5C2.51416 8.77614 2.2903 9 2.01416 9V7C1.18573 7 0.51416 7.67157 0.51416 8.5H2.51416ZM2.01416 8C2.2903 8 2.51416 8.22386 2.51416 8.5H0.51416C0.51416 9.32843 1.18573 10 2.01416 10V8ZM8.79528 8H2.01416V10H8.79528V8ZM9.79528 15.4799V9H7.79528V15.4799H9.79528ZM9.31536 15C9.58042 15 9.79528 15.2149 9.79528 15.4799H7.79528C7.79528 16.3194 8.47584 17 9.31536 17V15ZM8.83544 15.4799C8.83544 15.2149 9.05031 15 9.31536 15V17C10.1549 17 10.8354 16.3194 10.8354 15.4799H8.83544ZM8.83544 9V15.4799H10.8354V9H8.83544ZM16.6166 8H9.83544V10H16.6166V8ZM16.1166 8.5C16.1166 8.22386 16.3404 8 16.6166 8V10C17.445 10 18.1166 9.32843 18.1166 8.5H16.1166ZM16.6166 9C16.3404 9 16.1166 8.77614 16.1166 8.5H18.1166C18.1166 7.67157 17.445 7 16.6166 7V9ZM9.83544 9H16.6166V7H9.83544V9ZM8.83544 1.52008V8H10.8354V1.52008H8.83544ZM9.31536 2C9.05031 2 8.83544 1.78513 8.83544 1.52008H10.8354C10.8354 0.680565 10.1549 0 9.31536 0V2Z"
                  fill="#9173E6"
                  mask="url(#path-1-outside-1_0_268)"
                />
              </svg>
            </div>
          </div>

          <div className={styles["content-wrapper"]}>
            <div className={styles.content}>
              <div className={styles.header}>ATHLETS</div>
              <div className={styles["title-layout"]}>
                <div className={styles["number-layout"]}>
                  <div className={styles.number}>01</div>
                  <div className={styles.underline} />
                </div>
                <div className={styles.title}>{content.title.title1}</div>
              </div>
              <div className={styles.detail}>{content.athlets.detail1}</div>
            </div>
          </div>

          <div className={styles["content-wrapper-second"]}>
            <div className={styles["content-second"]}>
              <div className={styles["title-layout-second"]}>
                <div className={styles["number-layout"]}>
                  <div className={styles.number}>02</div>
                  <div className={styles["underline-second"]} />
                </div>
                <div className={styles.title}>{content.title.title2}</div>
              </div>
              <div className={styles.detail2}>{content.athlets.detail2}</div>
            </div>
            <SwiperComponent isAthletes content={content} />
          </div>

          <div className={styles["content-wrapper-third"]}>
            <div className={styles.content}>
              <div className={styles["title-layout-second"]}>
                <div className={styles["number-layout"]}>
                  <div className={styles.number}>03</div>
                  <div className={styles["underline-white"]} />
                </div>
                <div className={styles.title}>{content.title.title3}</div>
              </div>
              <div className={styles.detail3}>{content.athlets.detail3}</div>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <mask
                  id="path-1-outside-1_0_413"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="17"
                  height="17"
                  fill="black"
                >
                  <rect fill="white" width="17" height="17" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
                  fill="#5C37B7"
                />
                <path
                  d="M8 8V9H9V8H8ZM8 9H9V8H8V9ZM9 9V8H8V9H9ZM9 8H8V9H9V8ZM9 1.5C9 1.77614 8.77614 2 8.5 2V0C7.67157 0 7 0.671575 7 1.5H9ZM9 8V1.5H7V8H9ZM1.5 9H8V7H1.5V9ZM2 8.5C2 8.77614 1.77614 9 1.5 9V7C0.671573 7 0 7.67157 0 8.5H2ZM1.5 8C1.77614 8 2 8.22386 2 8.5H0C0 9.32843 0.671575 10 1.5 10V8ZM8 8H1.5V10H8V8ZM9 15.5V9H7V15.5H9ZM8.5 15C8.77614 15 9 15.2239 9 15.5H7C7 16.3284 7.67157 17 8.5 17V15ZM8 15.5C8 15.2239 8.22386 15 8.5 15V17C9.32843 17 10 16.3284 10 15.5H8ZM8 9V15.5H10V9H8ZM15.5 8H9V10H15.5V8ZM15 8.5C15 8.22386 15.2239 8 15.5 8V10C16.3284 10 17 9.32843 17 8.5H15ZM15.5 9C15.2239 9 15 8.77614 15 8.5H17C17 7.67157 16.3284 7 15.5 7V9ZM9 9H15.5V7H9V9ZM8 1.5V8H10V1.5H8ZM8.5 2C8.22386 2 8 1.77614 8 1.5H10C10 0.671573 9.32843 0 8.5 0V2Z"
                  fill="#9173E6"
                  mask="url(#path-1-outside-1_0_413)"
                />
              </svg>
            </div>
            <div className={styles.plus2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g opacity="0.3">
                  <mask
                    id="path-1-outside-1_0_416"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="17"
                    height="17"
                    fill="black"
                  >
                    <rect fill="white" width="17" height="17" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
                    fill="#5C37B7"
                  />
                  <path
                    d="M8 8V9H9V8H8ZM8 9H9V8H8V9ZM9 9V8H8V9H9ZM9 8H8V9H9V8ZM9 1.5C9 1.77614 8.77614 2 8.5 2V0C7.67157 0 7 0.671575 7 1.5H9ZM9 8V1.5H7V8H9ZM1.5 9H8V7H1.5V9ZM2 8.5C2 8.77614 1.77614 9 1.5 9V7C0.671573 7 0 7.67157 0 8.5H2ZM1.5 8C1.77614 8 2 8.22386 2 8.5H0C0 9.32843 0.671575 10 1.5 10V8ZM8 8H1.5V10H8V8ZM9 15.5V9H7V15.5H9ZM8.5 15C8.77614 15 9 15.2239 9 15.5H7C7 16.3284 7.67157 17 8.5 17V15ZM8 15.5C8 15.2239 8.22386 15 8.5 15V17C9.32843 17 10 16.3284 10 15.5H8ZM8 9V15.5H10V9H8ZM15.5 8H9V10H15.5V8ZM15 8.5C15 8.22386 15.2239 8 15.5 8V10C16.3284 10 17 9.32843 17 8.5H15ZM15.5 9C15.2239 9 15 8.77614 15 8.5H17C17 7.67157 16.3284 7 15.5 7V9ZM9 9H15.5V7H9V9ZM8 1.5V8H10V1.5H8ZM8.5 2C8.22386 2 8 1.77614 8 1.5H10C10 0.671573 9.32843 0 8.5 0V2Z"
                    fill="#9173E6"
                    mask="url(#path-1-outside-1_0_416)"
                  />
                </g>
              </svg>
            </div>
            <div className={styles.plus3}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <mask
                  id="path-1-outside-1_0_419"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="17"
                  height="17"
                  fill="black"
                >
                  <rect fill="white" width="17" height="17" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
                  fill="#5C37B7"
                />
                <path
                  d="M8 8V9H9V8H8ZM8 9H9V8H8V9ZM9 9V8H8V9H9ZM9 8H8V9H9V8ZM9 1.5C9 1.77614 8.77614 2 8.5 2V0C7.67157 0 7 0.671575 7 1.5H9ZM9 8V1.5H7V8H9ZM1.5 9H8V7H1.5V9ZM2 8.5C2 8.77614 1.77614 9 1.5 9V7C0.671573 7 0 7.67157 0 8.5H2ZM1.5 8C1.77614 8 2 8.22386 2 8.5H0C0 9.32843 0.671575 10 1.5 10V8ZM8 8H1.5V10H8V8ZM9 15.5V9H7V15.5H9ZM8.5 15C8.77614 15 9 15.2239 9 15.5H7C7 16.3284 7.67157 17 8.5 17V15ZM8 15.5C8 15.2239 8.22386 15 8.5 15V17C9.32843 17 10 16.3284 10 15.5H8ZM8 9V15.5H10V9H8ZM15.5 8H9V10H15.5V8ZM15 8.5C15 8.22386 15.2239 8 15.5 8V10C16.3284 10 17 9.32843 17 8.5H15ZM15.5 9C15.2239 9 15 8.77614 15 8.5H17C17 7.67157 16.3284 7 15.5 7V9ZM9 9H15.5V7H9V9ZM8 1.5V8H10V1.5H8ZM8.5 2C8.22386 2 8 1.77614 8 1.5H10C10 0.671573 9.32843 0 8.5 0V2Z"
                  fill="#9173E6"
                  mask="url(#path-1-outside-1_0_419)"
                />
              </svg>
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
                <div className={styles.title}>{content.title.title1}</div>
              </div>
              <div className={styles["players-detail"]}>
                {content.players.detail1}
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
                <div className={styles.title}>{content.title.title2}</div>
              </div>
              <div className={styles["players-detail-2"]}>
                {content.players.detail2}
              </div>
            </div>
            <SwiperComponent isAthletes={false} content={content} />
          </div>

          <div className={styles["players-content-wrapper-third"]}>
            <div className={styles["players-content-second"]}>
              <div className={styles["players-title-layout-third"]}>
                <div className={styles["number-layout"]}>
                  <div className={styles.number2}>03</div>
                  <div className={styles["underline-white"]} />
                </div>
                <div className={styles.title}>{content.title.title3}</div>
              </div>
              <div className={styles["players-detail-3"]}>
                {content.players.detail3}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
