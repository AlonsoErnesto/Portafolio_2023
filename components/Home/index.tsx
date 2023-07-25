import { Marquee } from '../Marquee';
import styles from './style.module.css';

export const Home = () => {
   return (
      <>
         <Marquee/>
         <div className={styles.wrapper}>
            <div className={styles.wrapper_title}>
               <p>Ernesto</p>
               <p>Mamani</p>
               <p className={styles.description}>Junior Full Stack developer</p>
            M</div>
            <div className={styles.wrapper_rigth}>
               <div className={styles.profile}>
                  <p className={styles.text}>
                     Desarrollador de Software con más de 2 años de experiencia.
                     Desarrollando proyectos empresariales, bancarios y scripting.
                  </p>
               </div>
            </div>
         </div>
      </>
   )
}
