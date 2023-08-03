import { InputLayout } from '../../Layouts/Input';
import styles from './style.module.css';

export const Contact = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.title_page}>
            <h3>Contactame</h3>
         </div>
         <div className={styles.container}>
            <div className={styles.content}>
               <h1>Ingrese sus datos</h1>
               <form className={styles.form}>
                  <div className={styles.names}>
                     <InputLayout type="text" id="nombre" nombre="nombre" placeholder='Nombre'/>
                     <InputLayout type="text" id="apellido" nombre="apellido" placeholder='Apellido'/>
                  </div>
                  <div className={styles.dates}>
                     <InputLayout type="email" id="correo" nombre="correo" placeholder='Correo'/>
                     <InputLayout type="number" id="telefono" nombre="telefono" placeholder='Telefono'/>
                  </div>
                     <InputLayout type="text" id="proposito" nombre="proposito" placeholder='Proposito'/>
                     <InputLayout type='textarea' rows={10} placeholder="Hola! 🤞" nombre="correo" id="correo"/>
                  <input className={styles.btn_submit} type="submit" value="Enviar"/>
               </form>
            </div>
         </div>
      </div>
   )
}
