import React from 'react';
import styles from './styles.module.css';

interface PropsInput {
   type : string;
   id:string;
   nombre:string;
   placeholder:string;
   rows?:number
}

export const InputLayout:React.FC<PropsInput> = (props) => {
   const { type, id, nombre, placeholder } = props;
   if (type==='textarea') {
      return <textarea className={styles.input_CSS} rows={10} id={id} name={nombre} placeholder={placeholder}/>
   } else {
      return <input className={styles.input_CSS} style={{height:50}} id={id} type={type} name={nombre} placeholder={placeholder}/>
   }
}
