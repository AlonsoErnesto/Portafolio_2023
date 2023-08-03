import Link from 'next/link';
import Image from 'next/image';

import { ArrowLeftCircleFill } from '@styled-icons/bootstrap/ArrowLeftCircleFill';
import { Reactjs } from '@styled-icons/remix-fill/Reactjs';
import { Typescript, Express, Oracle } from '@styled-icons/simple-icons';
import { Nodejs  } from '@styled-icons/boxicons-logos/Nodejs';
import { BugSlash } from '@styled-icons/fa-solid/BugSlash'


import styles from './style.module.css';
import { Footer } from '../../../components';
import { SenasaJob,Airbnb } from '../../../data/works';


const Senasa = () => {
   return (
      <>
      {/* 
         Copiar este a la respectiva pagina
         Luego, crear un nuevo componente PageWorks en donde se usara para las paginas.
         <PageWorks senanajob={senasajob}/>
         <PageWorks airbnb={Airbnb}/>

      */}
      <div className={styles.pageWrapper}>
      { SenasaJob.map((item) => (
         <>
         <div className={styles.arrowNavBack}>
            <Link href="/" >
               <ArrowLeftCircleFill className={styles.iconRigth} size={70} color="#ffffff"/>
            </Link>
            <h2 className={styles.title}>{item.title_corp}</h2>
         </div>
         <div className={styles.content}>
                  <div className={styles.topInfo}>
               <p className={styles.description}>
               El Servicio Nacional de Sanidad Agraria - SENASA, es la autoridad nacional y el organismo oficial del Perú en materia de sanidad agraria.
               </p>
               <div className={styles.info}>
                  <div className={styles.text}>
                     <p>
                        Se desarrollo una plataforma para la industria agragia guvernamental, en donde consisitio que el usuario realizara sus   opiniones, demandas, envio de documentos, etc. <br/>
                        El proyecto se tomo 3 meses en desarrollador y llevarlo a produccion.
                     </p>
                  </div>
                  <div className={styles.image}>
                     <Image src="/assets/images/works/senasa.png" alt="Udemy" width={190} height={190} />
                  </div>
               </div>
               <hr className={styles.lineDivide} />
               <div className={styles.iconsTech}>
                  <Reactjs className={styles.react} size={80} color="#ffffff"/>
                  <Typescript className={styles.typescript} size={80} color="#ffffff"/>
                  <Nodejs className={styles.nodejs} size={80} color="#ffffff"/>
                  <Express className={styles.express} size={80} color="#ffffff"/>
                  <Oracle className={styles.express} size={80} color="#ffffff"/>
               </div>
               <div className={styles.cardImage}>
                  <div style={{textAlign:'center'}}>
                     <h1>Imagen #1</h1>
                     <p>Por cuestionen de seguridad, no se mostrara imagenes de la plataforma del gobierno.</p>
                  </div>
               </div>
               <div className={styles.titleTask}>
                  <h2 style={{fontSize:50}}>Puntos de trabajo</h2>
               </div>
               <div className={styles.listCard}>
                  <div className={styles.infoCard}>
                     <div>
                        <BugSlash size={70} color="#79C7C5"/>
                     </div>
                     <div> 
                        <h3 style={{fontSize:26}}>Desarrollador de Bucks</h3>
                     </div>
                  </div>
                  <div>
                     <div className={styles.infoCard}>
                        <div>
                           <BugSlash size={70} color="#79C7C5"/>
                        </div>
                        <div> 
                           <h3 style={{fontSize:26}}>Desarrollador de Bucks</h3>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className={styles.infoCard}>
                        <div>
                           <BugSlash size={70} color="#79C7C5"/>
                        </div>
                        <div> 
                           <h3 style={{fontSize:26}}>Desarrollador de Bucks</h3>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className={styles.infoCard}>
                        <div>
                           <BugSlash size={70} color="#79C7C5"/>
                        </div>
                        <div> 
                           <h3 style={{fontSize:26}}>Desarrollador de Bucks</h3>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className={styles.infoCard}>
                        <div>
                           <BugSlash size={70} color="#79C7C5"/>
                        </div>
                        <div> 
                           <h3 style={{fontSize:26}}>Desarrollador de Bucks</h3>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className={styles.infoCard}>
                        <div>
                           <BugSlash size={70} color="#79C7C5"/>
                        </div>
                        <div> 
                           <h3 style={{fontSize:26}}>Desarrollador de Bucks</h3>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className={styles.infoCard}>
                        <div>
                           <BugSlash size={70} color="#79C7C5"/>
                        </div>
                        <div> 
                           <h3 style={{fontSize:26}}>Desarrollador de Bucks</h3>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className={styles.infoCard}>
                        <div>
                           <BugSlash size={70} color="#79C7C5"/>
                        </div>
                        <div> 
                           <h3 style={{fontSize:26}}>Desarrollador de Bucks</h3>
                        </div>
                     </div>
                  </div>
               </div>
                  </div>
         </div>
         </>
      )) }
      </div>
      <Footer/>
      </>
   )
}

export default Senasa;