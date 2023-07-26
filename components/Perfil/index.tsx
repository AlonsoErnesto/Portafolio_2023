import styles from './style.module.css';


export const Perfil = () => {
   return (
      <div className={styles.contain}>
         <h1 className={styles.title}>Sobre mi</h1>
         <div className={styles.wrapper}>
            <div className={styles.content}>
               <div className={styles.description}>
                  <p>Desarrollador WEB Full Stack Junior, con mas de dos años de experiencia en el rubro de la tecnologia, desarrollando proyectos empresariale, bancarios, y para empresas PYMES como desarrollador freelance.</p>
                  <button className={styles.btn_contact}>Contactame!</button>
               </div>
               <div className={styles.photo}>
                  <img src="./assets/images/profile.png"/>
               </div>
            </div>
         </div>
      </div>
   )
}
