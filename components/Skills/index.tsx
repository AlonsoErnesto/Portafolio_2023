import styles from './style.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, SwiperOptions } from 'swiper';


export const Skills = () => {

   const swiperConfig: SwiperOptions = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
         rotate: 0,
         stretch: 0,
         depth: 100,
         modifier: 2.5,
      },
      // pagination: { el: '.swiper-pagination', clickable: true },
      // navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true },
      modules: [EffectCoverflow, Pagination, Navigation],
      // modules:[Pagination]
   };

   
   return (
      <div className={styles.wrapper}>
         <div className={styles.title}>
            <h1>Skills</h1>
         </div>
         <div className={styles.list_card}>
            <div className={styles.contain}>
               <Swiper {...swiperConfig} className={styles.swiper_container} >
                  <SwiperSlide className={styles.item}>
                  <div className={styles.title_card}>
                     <h1>Javascript</h1>
                     <p>Mas de 2 años desarrollando proyectos con JS.</p>
                  </div>
                  <div className={styles.list_icons}>
                     <span>
                        VainillaJS
                     </span>
                     <span>
                        ReactJS
                     </span>
                     <span>
                        NextJS
                     </span>
                     <span>
                        React-Native
                     </span>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.item}>
                  <div className={styles.title_card}>
                     <h1>Javascript</h1>
                     <p>Mas de 2 años desarrollando proyectos con JS.</p>
                  </div>
                  <div className={styles.list_icons}>
                     <span>
                        VainillaJS
                     </span>
                     <span>
                        ReactJS
                     </span>
                     <span>
                        NextJS
                     </span>
                     <span>
                        React-Native
                     </span>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.item}>
                  <div className={styles.title_card}>
                     <h1>Javascript</h1>
                     <p>Mas de 2 años desarrollando proyectos con JS.</p>
                  </div>
                  <div className={styles.list_icons}>
                     <span>
                        VainillaJS
                     </span>
                     <span>
                        ReactJS
                     </span>
                     <span>
                        NextJS
                     </span>
                     <span>
                        React-Native
                     </span>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.item}>
                  <div className={styles.title_card}>
                     <h1>Javascript</h1>
                     <p>Mas de 2 años desarrollando proyectos con JS.</p>
                  </div>
                  <div className={styles.list_icons}>
                     <span>
                        VainillaJS
                     </span>
                     <span>
                        ReactJS
                     </span>
                     <span>
                        NextJS
                     </span>
                     <span>
                        React-Native
                     </span>
                  </div>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>
      </div>
   )
}
