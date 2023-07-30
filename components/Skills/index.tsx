import { Swiper, SwiperSlide } from 'swiper/react';
import { 
   ReactLogo, 
   Nodejs, 
   Firebase, 
   Sketch,
   VisualStudio, 
   Git, 
   Github,
   Bootstrap, 
   Typescript,
   Flutter,
   TailwindCss} from '@styled-icons/boxicons-logos';
import { 
   Nextdotjs,
   Nestjs,
   Mysql, 
   Mongodb, 
   Postgresql, 
   Figma, 
   Adobephotoshop,
   Neovim,
   Apollographql,
   Express,
   Graphql,
   Socketdotio,
   Html5,
} from '@styled-icons/simple-icons';

import { Css3,JsSquare } from '@styled-icons/fa-brands';
import { Cloud } from '@styled-icons/bootstrap/Cloud';
import { ArrowheadLeftOutline, ArrowheadRightOutline } from '@styled-icons/evaicons-outline' ;

import styles from './style.module.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore,{ Autoplay, EffectCoverflow, Pagination, Navigation, SwiperOptions } from 'swiper';

export const Skills = () => {

   
   SwiperCore.use([Autoplay, EffectCoverflow]);

   const swiperConfig: SwiperOptions = {
      effect: 'coverflow',
      centeredSlides: true,
      loop: true,
      autoplay:{ delay: 3000 },
      speed:1500,
      slidesPerView: 'auto', 
      spaceBetween: '10%',
      coverflowEffect: {
         rotate: 0,
         stretch: 0,
         depth: 500,
         modifier: 1,
         slideShadows:false,
      },
      modules: [EffectCoverflow, Pagination, Navigation],
   };

   
   return (
      <div className={styles.wrapper_skills}>
         <div className={styles.title}>
            <h1>Skills</h1>
         </div>
         <div className={styles.list_card}>
            <div className={styles.contenedor}>
               <Swiper {...swiperConfig} className={styles.swiper_container} >
                   {/* Languajes */}
                  <SwiperSlide className={styles['custom-slide']}>
                  <div className={styles.title_card}>
                     <h1>Lenguajes</h1>
                     <p>
                        Estos son los <span style={{fontWeight:'bold'}}>Lenguajes</span>, que aprendí y utilicé para desarrollar proyectos. <br/>
                        Incluyendo lenguajes de etiquetado y cascada.
                     </p>
                  </div>
                  <div className={styles.list_icons}>
                     <span>
                        <Html5 size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>HTML5</p>
                     </span>
                     <span>
                        <Css3 style={{marginLeft:5}} size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>CSS3</p>
                     </span>
                     <span>
                        <JsSquare style={{marginLeft:10}} size={60} color="#ffffff"/>
                        <p style={{textAlign:'center',marginTop:5}}>Javascript</p>
                     </span>
                     <span>
                        <Typescript style={{marginLeft:10}} size={70} color="#ffffff"/>
                        <p style={{textAlign:'center',marginBottom:5}}>Typescript</p>
                     </span>
                  </div>
                  <p className={styles.nivel} style={{color:'#73e273'}}>
                     <ArrowheadLeftOutline size={40} color='#73e273'/>
                     Avanzado
                     <ArrowheadRightOutline size={40} color='#73e273'/>
                  </p>
                  </SwiperSlide>
                  {/* BACKEND */}
                  <SwiperSlide className={styles['custom-slide']}>
                  <div className={styles.title_card}>
                     <h1>Back-End</h1>
                     <p>
                        Para el desarrollo del <span style={{fontWeight:'bold'}}>Servidor</span>, estas tecnologias son las que uso mayormente. <br/>
                        Con un nivel intermedio a basico.
                     </p>
                  </div>
                  <div className={styles.list_icons}>
                     <span>
                        <Apollographql size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>Apollo</p>
                     </span>
                     <span>
                        <Express size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>Express</p>
                     </span>
                     <span>
                        <Nodejs size={60} color="#ffffff"/>
                        <p style={{textAlign:'center',marginTop:5}}>NodeJS</p>
                     </span>
                     <span>
                        <Nestjs size={60} color="#ffffff"/>
                        <p style={{textAlign:'center',marginTop:5}}>NestJS</p>
                     </span>
                  </div>
                  <p className={styles.nivel} style={{color:'#ffc107'}}>
                     <ArrowheadLeftOutline size={40} color='#ffc107'/>
                     Intermedio
                     <ArrowheadRightOutline size={40} color='#ffc107'/>
                  </p>
                  </SwiperSlide>
                  {/*  API */}
                  <SwiperSlide className={styles['custom-slide']}>
                     <div className={styles.title_card}>
                        <h1>API</h1>
                        <p>Estos son los tipos de <span style={{fontWeight:'bold'}}>APIS</span> que desarrollo y lo consumo en mis proyectos. </p>
                     </div>
                     <div className={styles.list_icons}>
                        <span>
                           <Graphql size={60} color='#ffffff'/>
                           <p style={{textAlign:'center',marginTop:5}}>GraphQL</p>
                        </span>
                        <span>
                           <Socketdotio style={{marginLeft:10}} size={60} color='#ffffff'/>
                           <p style={{textAlign:'center',marginTop:5}}>WebSocket</p>
                        </span>
                        <span>
                           <Cloud size={60} color='#ffffff'/>
                           <p style={{textAlign:'center',marginTop:5}}>RESTful</p>
                        </span>
                     </div>
                     <p className={styles.nivel} style={{color:'#ffc107'}}>
                     <ArrowheadLeftOutline size={40} color='#ffc107'/>
                        Intermedio
                     <ArrowheadRightOutline size={40} color='#ffc107'/>
                  </p>
                  </SwiperSlide>
                  {/*  DATABASES */}
                  <SwiperSlide className={styles['custom-slide']}>
                  <div className={styles.title_card}>
                     <h1>DBMS</h1>
                     <p>
                        Con conocinimiento del lenguaje SQL, manipulo <span style={{fontWeight:'bold'}}>Gestor</span> de base de datos relacionales (SQL) y no relacionales (NO-SQL) .<br/>
                     </p>
                  </div>
                  <div className={styles.list_icons}>
                     <span>
                        <Mysql size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>MYSQL</p>
                     </span>
                     <span>
                        <Mongodb style={{marginLeft:10}} size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>MongoDB</p>
                     </span>
                     <span>
                        <Postgresql style={{marginLeft:10}} size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>PostgreSQL</p>
                     </span>
                     <span>
                        <Firebase  size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>Firebase</p>
                     </span>
                  </div>
                  <p className={styles.nivel} style={{color:'#ffc107'}}>
                     <ArrowheadLeftOutline size={40} color='#ffc107'/>
                     Intermedio
                     <ArrowheadRightOutline size={40} color='#ffc107'/>
                  </p>
                  </SwiperSlide>
                    {/* MOVIL  */}
                  <SwiperSlide className={styles['custom-slide']}>
                  <div className={styles.title_card}>
                     <h1>Movil</h1>
                     <p>Conocimiento <span style={{fontWeight:'bold'}}>básico</span> en desarrollo movil, para el desarrollo UI, UX, Front-End y Back-End</p>
                  </div>
                  <div className={styles.list_icons}>
                     <span>
                        <ReactLogo style={{marginLeft:20}}  size={80} color="#ffffff"/>
                        <p style={{textAlign:'center',marginTop:5}}>React-Native</p>
                     </span>
                     <span>
                        <Flutter style={{marginRight:10}} size={80} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>Flutter</p>
                     </span>
                  </div>
                  <p className={styles.nivel} style={{color:'#d9534f'}}>
                     <ArrowheadLeftOutline size={40} color='#d9534f'/>
                     Básico
                     <ArrowheadRightOutline size={40} color='#d9534f'/>
                  </p>
                  </SwiperSlide>
                   {/* UI- UX */}
                  <SwiperSlide className={styles['custom-slide']}>
                  <div className={styles.title_card}>
                     <h1>UI - UX</h1>
                     <p>Conocimiento Basico en <span style={{fontWeight:'bold'}}>Interfaz y Experiencia</span> de Usuario, desarrollando moqups y maquetado.</p>
                  </div>
                  <div className={styles.list_icons}>
                     <span>
                        <Figma size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>Figma</p>
                     </span>
                     <span>
                        <Sketch size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>Sketch</p>
                     </span>
                     <span>
                        <Adobephotoshop style={{marginLeft:10}} size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>Photoshop</p>
                     </span>
                  </div>
                  <p className={styles.nivel} style={{color:'#d9534f'}}>
                     <ArrowheadLeftOutline size={40} color='#d9534f'/>
                     Básico
                     <ArrowheadRightOutline size={40} color='#d9534f'/>
                  </p>
                  </SwiperSlide>
                  {/*  Tool Kitls */}
                  <SwiperSlide className={styles['custom-slide']}>
                  <div className={styles.title_card}>
                     <h1>Tool Kits</h1>
                     <p><span style={{fontWeight:'bold'}}>Herramientas</span> de desarrollo que uso en todos los proyectos, como IDE's, Versionamiento, Software, etc. </p>
                  </div>
                  <div className={styles.list_icons}>
                     <span>
                        <VisualStudio size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>VCode</p>
                     </span>
                     <span>
                        <Neovim size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>Neovim</p>
                     </span>
                     <span>
                        <Git size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>Git</p>
                     </span>
                     <span>
                        <Github size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>Github</p>
                     </span>
                  </div>
                  <p className={styles.nivel} style={{color:'#73e273'}}>
                     <ArrowheadLeftOutline size={40} color='#73e273'/>
                     Avanzado
                     <ArrowheadRightOutline size={40} color='#73e273'/>
                  </p>
                  </SwiperSlide>
                   {/* FROTNEND */}
                  <SwiperSlide className={styles['custom-slide']}>
                  <div className={styles.title_card}>
                     <h1>Front-End</h1>
                     <p>
                        Estas tecnologias son las que domino para el desarrollo de aplicaciones WEB, por el lado del <span style={{fontWeight:'bold'}}>Cliente</span>.<br/>
                     </p>
                  </div>
                  <div className={styles.list_icons}>
                     <span>
                        <ReactLogo size={60} color="#ffffff"/>
                        <p style={{textAlign:'center',marginTop:5}}>ReactJS</p>
                     </span>
                     <span>
                        <Nextdotjs size={55} color="#ffffff"/>
                        <p style={{textAlign:'center',marginTop:5}}>NextJS</p>
                     </span>
                     <span>
                        <Bootstrap style={{marginLeft:10}} size={60} color='#ffffff'/>
                        <p style={{textAlign:'center',marginTop:5}}>Bootstrap</p>
                     </span>
                     <span>
                        <TailwindCss size={60} color="#ffffff"/>
                        <p style={{textAlign:'center',marginTop:5}}>Tailwind</p>
                     </span>
                  </div>
                  <p className={styles.nivel} style={{color:'#73e273'}}>
                     <ArrowheadLeftOutline size={40} color='#73e273'/>
                     Avanzado
                     <ArrowheadRightOutline size={40} color='#73e273'/>
                  </p>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>
      </div>
   )
}
