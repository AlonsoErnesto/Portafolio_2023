import styles from './style.module.css';

export const Footer = () => {
   return (
      <div className={styles.footer}>
         <div className={styles.contact}>
            <div className={styles.mail_center}>
               <p className={styles.email}>ernesto134alonso123@gmail.com</p>
            </div>
         </div>
         <div className={styles.footer_info}>
            <div className={styles.left_info}>
               <p>Privacy Policy</p>
               <p>Cookie Policy</p>
               <p>Ernesto Alonso</p>
            </div>
            <div className={styles.right_info}>
               <p>DEV_TECH SAC</p>
               <p>Peru, Arequipa 04200 (LATAM)</p>
               <p>51.978775813</p>
            </div>
         </div>
      </div>
   )
}
