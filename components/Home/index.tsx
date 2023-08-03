import { Marquee } from '../Marquee';
import { Telegram } from '@styled-icons/bootstrap/Telegram';
import styles from './style.module.css';

export const Home = () => {

   const descargarPDF = () => {
      const a = document.createElement('a');
      a.href = './assets/pdf/CV.pdf';
      a.download = 'CV-ERNESTO.pdf';
      a.click();
   }

   return (
      <>
         <Marquee/>
         <div className={styles.wrapper}>
            <div className={styles.wrapper_title}>
               <div className={styles.text_style}>
                  <h1>Desarrollador WEB Full Stack</h1>
               </div>
                  <p className={styles.description}> Mamani Ernesto Alonso</p>
               <div className={styles.contain_btn}>
                  <button className={styles.btn_contact} onClick={() =>descargarPDF()}>
                     <span>
                        Descargar CV <Telegram className={styles.icon_btn} size={24} color="#ffffff"/>
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}
