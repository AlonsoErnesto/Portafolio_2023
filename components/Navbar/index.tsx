import { UserCircle, HomeAlt, CodeCurly, Moon } from '@styled-icons/boxicons-regular';
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp';
import { WorkOutline } from '@styled-icons/material/WorkOutline';
import styles from './style.module.css';

export const Navbar = () => {
   return (
      <div className={styles.navbar}>
         <div className={styles.bar}>
            <span className={styles.navbar_title}>
               <HomeAlt size={35} color="#ffffff"/>
            </span>
            <span className={styles.navbar_title}>
               <UserCircle size={35} color="#ffffff"/>
            </span>
            <span className={styles.navbar_title}>
               <CodeCurly size={35} color="#ffffff"/>
            </span>
            <span className={styles.navbar_title}>
               <WorkOutline size={35} color="#ffffff"/>
            </span>
            <span className={styles.navbar_title}>
               <Whatsapp size={35} color="#ffffff"/>
            </span>
            <span className={styles.navbar_title}>
               <Moon size={35} color="#ffffff"/>
            </span>
         </div>
      </div>
   )
}
