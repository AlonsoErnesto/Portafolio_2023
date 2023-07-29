import styles from './styles.module.css';

export const Projects = () => {

   const projects = [ 
      {
         "Nombre":'Exponentia',
         "Tipo":'Trabajo',
         "Date":'2021-2022',
         "Puesto":'Desarrollador Typescript Junior',
      },
      {
         "Nombre":'Exponentia',
         "Tipo":'Trabajo',
         "Date":'2021-2022',
         "Puesto":'Desarrollador Typescript Junior',
      },
      {
         "Nombre":'Exponentia',
         "Tipo":'Trabajo',
         "Date":'2021-2022',
         "Puesto":'Desarrollador Typescript Junior',
      },
      {
         "Nombre":'Exponentia',
         "Tipo":'Trabajo',
         "Date":'2021-2022',
         "Puesto":'Desarrollador Typescript Junior',
      },
      {
         "Nombre":'Exponentia',
         "Tipo":'Trabajo',
         "Date":'2021-2022',
         "Puesto":'Desarrollador Typescript Junior',
      },
      {
         "Nombre":'Exponentia',
         "Tipo":'Trabajo',
         "Date":'2021-2022',
         "Puesto":'Desarrollador Typescript Junior',
      },
      {
         "Nombre":'Exponentia',
         "Tipo":'Trabajo',
         "Date":'2021-2022',
         "Puesto":'Desarrollador Typescript Junior',
      },
      {
         "Nombre":'Exponentia',
         "Tipo":'Trabajo',
         "Date":'2021-2022',
         "Puesto":'Desarrollador Typescript Junior',
      }
   ];

   return (
      <div className={styles.wrapper}>
         <div className={styles.title_contain}>
            <h3>Works & Projects</h3>
         </div>
         <div className={styles.content}>
            <div className={styles.list_works}>
               { projects.map((item) => (
                  <div className={styles.item}>
                     <h3>{item.Nombre}</h3>
                     <p>{item.Puesto}</p>
                     <div>
                        <time dateTime={item.Date}>{item.Date}</time>
                     </div>
                     <span>{item.Tipo}</span>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}
