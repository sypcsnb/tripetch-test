import Image from "next/image";
import styles from "./styles/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <section className={styles.section}>
          <div className={styles["athlets-image-container"]}>
            <Image src="/athlets.png" alt="athlets" objectFit="cover" fill />
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
              <div className={styles["title-layout"]}>
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
          </div>

          <div className={styles["content-wrapper-third"]}>
            <div className={styles.content}>
              <div className={styles["title-layout"]}>
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
            <Image src="/players.png" alt="players" objectFit="cover" fill />
          </div>
          <div className={styles.line1}>
            <Image src="/Path 45 Copy.svg" alt="line1" objectFit="cover" fill />
          </div>
          <div className={styles.line2}>
            <Image src="/Path 45.svg" alt="line1" objectFit="cover" fill />
          </div>
          <div className={styles.plus1}>
            <Image src="/Rectangle 34.svg" alt="plus1" objectFit="cover" fill />
          </div>
          <div className={styles.plus2}>
            <Image
              src="/Rectangle 34 Copy.svg"
              alt="plus2"
              objectFit="cover"
              fill
            />
          </div>
          <div className={styles.plus3}>
            <Image src="/Rectangle 34.svg" alt="plus3" objectFit="cover" fill />
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
              <div className={styles["title-layout"]}>
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
              <div className={styles["title-layout"]}>
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
