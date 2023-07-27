import React, { useEffect} from 'react'
import styles from './style.module.css';


export const Perfil:React.FC = () => {

   useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
         const btn = document.querySelector(`.${styles['wrapper']}`) as HTMLElement;
         if (btn) {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            btn.style.setProperty('--x', x + 'px');
            btn.style.setProperty('--y', y + 'px');
         }
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      return () => {
         document.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);


   return (
      <div className={styles.contain}>
         <div className={styles.title_cont}>
            <h1 className={styles.title}>Sobre mi</h1>   
         </div>
         <div  className={styles['wrapper']}>
            <div className={styles.content}>
               <div className={styles.description}>
                  <div className={styles.txt_col}>
                     <h2>+2 </h2>
                     <p>Años Desarrollando aplicaciones WEB, SPA, WPA, Ecommerce. </p>
                  </div>
                  <br/>
                  <div className={styles.txt_col}>
                     <h2>+5</h2>
                     <p>Proyectos desarrollados como Full Stack (Freelance). </p>
                  </div>
                  <br/>
                  <div className={styles.txt_col}>
                     <h2>+3</h2>
                     <p>Empresas Tech trabajanod como Desarrollador BackEnd, FrontEnd asi como Full Stack  </p>
                  </div>
               </div>
               <div className={styles.photo}>
                  <img src="./assets/images/profile.png"/>
               </div>
            </div>
         </div>
      </div>
   )
}
