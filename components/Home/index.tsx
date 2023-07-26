import { Marquee } from '../Marquee';
import { Telegram } from '@styled-icons/bootstrap/Telegram';
import styles from './style.module.css';

export const Home = () => {
   return (
      <>
         <Marquee/>
         <div className={styles.wrapper}>
            <div className={styles.wrapper_title}>
               <h1>Desarrollador WEB Full Stack</h1>
               <p className={styles.description}> Mamani Ernesto Alonso</p>
               <div className={styles.contain_btn}>
                  <button className={styles.btn_contact}>
                     <span>
                        Contactar <Telegram className={styles.icon_btn} size={24} color="#ffffff"/>
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}
