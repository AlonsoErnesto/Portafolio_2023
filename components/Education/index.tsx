import styles from './styles.module.css';

export const Education = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.title_div}>
            <h1>Educacion</h1>
         </div>
         <div className={styles.content}>
            <div className={styles.education}>
               <div className={styles.info}>
                  <h1>Ingenieria de Sistemas</h1>
                  <p>
                     Universidad Peruana de Ciencias Aplicadas (UPC)<br/>
                     <span style={{fontSize:18}}>Estudiante</span>
                     </p>
               </div>
               <div className={styles.logo}>
                  <img src="./assets/images/education/upc.png"/>
               </div>
            </div>
            <div className={styles.education}>
               <div className={styles.info}>
                  <h1>Desarrollo WEB Full Stack</h1>
                  <p>
                     Intituto de Educacion Superior TECSUP <br/>
                     <span style={{fontSize:18}}>2021</span>
                  </p>
               </div>
               <div className={styles.logo}>
                  <img src="./assets/images/education/tecsup.png"/>
               </div>
            </div>
            <div className={styles.education}>
               <div className={styles.info}>
                  <h1>Desarrollador de Sistemas</h1>
                  <p>
                     Instituto tecnologico de Arequipa UNITEK<br/>
                     <span style={{fontSize:18}}>2021</span>
                  </p>
               </div>
               <div className={styles.logo}>
                  <img src="./assets/images/education/unitek.png"/>
               </div>
            </div>
            <div className={styles.education}>
               <div className={styles.info}>
                  <h1>ReactJS / Express / MongoDB</h1>
                  <p>
                     Juan Pablo de la Torre - Fernando Herrera<br/>
                     <span style={{fontSize:18}}>2022</span>
                  </p>
               </div>
               <div className={styles.logo}>
                  <img src="./assets/images/education/udemy.png"/>
               </div>
            </div>
         </div>
      </div>
   )
}
