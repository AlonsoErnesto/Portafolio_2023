import styles from './styles.module.css';
import Link from 'next/link'

export const Projects = () => {

   const projects = [ 
      {
         "id":'1',
         "nombre":'SENASA',
         "Tipo":'Empleo',
         "Date":'2023-2023',
         "Puesto":'Desarrollador ReactJS y Nodejs',
         "page":'senasa'
      },
      {
         "id":'2',
         "nombre":'Airbnb Clone',
         "Tipo":'Proyecto',
         "Date":'2022-2023',
         "Puesto":'ReactJS NestJS MongoDB',
         "page":'airbnb-clone'
      },
      {
         "id":'3',
         "nombre":'FREELANCE',
         "Tipo":'Empleo',
         "Date":'2022-2023',
         "Puesto":'Desarrollador WEB FullStack',
         "page":'freelance'
      },
      {
         "id":'4',
         "nombre":'Facebook Clone',
         "Tipo":'Proyecto',
         "Date":'2022-2022',
         "Puesto":'ReactJS, Express, MongoDB',
         "page":'facebook-clone'
      },
      {
         "id":'5',
         "nombre":'EXPONENTIA',
         "Tipo":'Empleo',
         "Date":'2021-2022',
         "Puesto":'Desarrollador Typescript Junior',
         "page":'exponentia'
      },
      {
         "id":'6',
         "nombre":'Portafolio',
         "Tipo":'Proyecto',
         "Date":'2021-2022',
         "Puesto":'NextJS - Typescript - CSS',
         "page":'portafolio'
      },
      {
         "id":'7',
         "nombre":'SO-ArchTools',
         "Tipo":'Stack-Tools',
         "Date":'2022',
         "Puesto":'ArchLinux Nvim Tmux Kitty Fish',
         "page":'tools-arch'
      },
      {
         "id":'8',
         "nombre":'RestaurantGO - TESIS',
         "Tipo":'Proyecto',
         "Date":'2021-2022',
         "Puesto":'React-Native Firebase GoogleAPI',
         "page":'restaurant-go',
      }
   ];

   return (
      <div className={styles.wrapper}>
         <div className={styles.title_contain}>
            <h3>Experiencia</h3>
         </div>
         <div className={styles.content}>
            <div className={styles.list_works}>
               { projects.map(({Puesto,id,nombre,Date,Tipo,page}) => (
                  <Link href={`/experience/${page}`} style={{textDecoration:'none'}} key={id} className={styles.urlBtn}>
                  <div className={styles.item}>
                     <h3>{nombre}</h3>
                     <p>{Puesto}</p>
                     <div>
                        <time dateTime={Date}>{Date}</time>
                     </div>
                     { Tipo === 'Proyecto' ? (
                        <span style={{background:'#D4AC0D'}}>{Tipo}</span>
                     ) : (
                        <span>{Tipo}</span>
                     )}
                  </div>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   )
}
