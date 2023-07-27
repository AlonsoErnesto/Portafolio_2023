import styles from './style.module.css';

export const Skills = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.title}>
            <h1>Skills</h1>
         </div>
         <div className={styles.list_card}>
            <div className={styles.contain}>
               <div className={styles.card}>
                  <div className={styles.title_card}>
                     <h1>Javascript</h1>
                     <p>Mas de 2 años desarrollando proyectos con JS.</p>
                  </div>
                  <div className={styles.list_icons}>
                     <span>
                        VainillaJS
                     </span>
                     <span>
                        ReactJS
                     </span>
                     <span>
                        NextJS
                     </span>
                     <span>
                        React-Native
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
