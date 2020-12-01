import React from 'react';
import styles  from './SignIn.module.css';

const SignIn = ({visible, setVisibility})=>{
  const handleSubmit = ()=>{
    setVisibility(false);
  }
  return(
    <div className={styles.container} style={{visibility: visible ? "visible" : "hidden"}}>
      <input className={styles.field} placeholder="first name" type="text"/>
      <input className={styles.field} placeholder="last name" type="text"/>
      <input className={styles.field} placeholder="email" type="text"/>
      <div style={{height: "100px"}}></div>
      <input className={styles.field} placeholder="password" type="text"/>
      <input className={styles.field} placeholder="confirm password" type="text"/>
      <div className={styles.button_container}>
        <button className={styles.button_green} onClick={handleSubmit}>Submit</button>
        <button className={styles.button_yellow}>Sign In with Google</button>
      </div>
    </div>
  )
}

export default SignIn;
