import styles from './style.module.css'

export const Marquee: React.FC = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slide_track}>
          <div className={styles.slide}>
            <p>Javascript</p>
          </div>
          <div className={styles.slide}>
            <p>Typescript</p>
          </div>
          <div className={styles.slide}>
            <p>ReactJS</p>
          </div>
          <div className={styles.slide}>
            <p>Angular2+</p>
          </div>
          <div className={styles.slide}>
            <p>NextJS</p>
          </div>
          <div className={styles.slide}>
            <p>Bootstrap</p>
          </div>
          <div className={styles.slide}>
            <p>CSS3</p>
          </div>
    
          <div className={styles.slide}>
            <p>NESTJS</p>
          </div>
          <div className={styles.slide}>
            <p>NodeJS</p>
          </div>
          <div className={styles.slide}>
            <p>Express</p>
          </div>
          <div className={styles.slide}>
            <p>MongoDB</p>
          </div>
          <div className={styles.slide}>
            <p>MYSQL</p>
          </div>
          <div className={styles.slide}>
            <p>POSTGRESQL</p>
          </div>
          {/* <div className={styles.slide}>
            <p>FIREBASE</p>
          </div> */}
      </div>
  </div>
  );
};

