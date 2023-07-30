import { UserCircle, HomeAlt, CodeCurly } from '@styled-icons/boxicons-regular';
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp';
import { WorkOutline } from '@styled-icons/material/WorkOutline';
import { School } from '@styled-icons/ionicons-outline/School';
import styles from './style.module.css';

export const Navbar = () => {
   return (
      <div className={styles.navbar}>
         <div className={styles.bar}>
            <span className={styles.navbar_title}>
               <HomeAlt className={styles.icon} size={35} />
            </span>
            <span className={styles.navbar_title}>
               <UserCircle className={styles.icon} size={35} color="#ffffff"/>
            </span>
            <span className={styles.navbar_title}>
               <CodeCurly className={styles.icon} size={35} color="#ffffff"/>
            </span>
            <span className={styles.navbar_title}>
               <WorkOutline className={styles.icon} size={35} color="#ffffff"/>
            </span>
            <span className={styles.navbar_title}>
               <School className={styles.icon} size={35} color="#ffffff"/>
            </span>
            <span className={styles.navbar_title}>
               <Whatsapp className={styles.icon} size={35} color="#ffffff"/>
            </span>
         </div>
      </div>
   )
}
