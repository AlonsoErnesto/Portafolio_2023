import React , {useState} from 'react';
import { UserCircle, HomeAlt, CodeCurly } from '@styled-icons/boxicons-regular';
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp';
import { WorkOutline } from '@styled-icons/material/WorkOutline';
import { School } from '@styled-icons/ionicons-outline/School';
import styles from './style.module.css';

export const Navbar = () => {

   const [pressnav, setPressnav] = useState(0);

   const handleScroll = (scrollValue: number) => {
      switch (scrollValue) {
      case 1:
         window.scrollTo({
            top: 0,
            behavior: 'smooth',
         });
         setPressnav(1);
         break;
      case 2:
         window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
         });
         setPressnav(2);
         break;
      case 3:
         window.scrollTo({
            top: window.innerHeight * 2,
            behavior: 'smooth',
         });
         setPressnav(3);
         break;
      case 4:
         window.scrollTo({
            top: window.innerHeight * 3,
            behavior: 'smooth',
         });
         setPressnav(4);
         break;
      case 5:
         window.scrollTo({
            top: window.innerHeight * 4,
            behavior: 'smooth',
         });
         setPressnav(5);
         break;
      case 6:
         window.scrollTo({
            top: window.innerHeight * 5.2,
            behavior: 'smooth',
         });
         setPressnav(6);
         break;
      default:
         break;
      }
   };

   return (
      <div className={styles.navbar}>
         <div className={styles.bar}>
            <span className={`${styles.navbar_title} ${styles.selected}`} onClick={() => handleScroll(1)}>
               <HomeAlt className={styles.icon} size={35} color={`${pressnav}`} />
            </span>
            <span className={styles.navbar_title} onClick={() => handleScroll(2)}>
               <UserCircle className={styles.icon} size={35} color="#ffffff"/>
            </span>
            <span className={styles.navbar_title} onClick={() => handleScroll(3)}>
               <CodeCurly className={styles.icon} size={35} color="#ffffff"/>
            </span>
            <span className={styles.navbar_title} onClick={() => handleScroll(4)}>
               <WorkOutline className={styles.icon} size={35} color="#ffffff"/>
            </span>
            <span className={styles.navbar_title} onClick={() => handleScroll(5)}>
               <School className={styles.icon} size={35} color="#ffffff"/>
            </span>
            <span className={styles.navbar_title} onClick={() => handleScroll(6)}>
               <Whatsapp className={styles.icon} size={35} color="#ffffff"/>
            </span>
         </div>
      </div>
   )
}
