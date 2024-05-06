import React from 'react'
import style from './Footer.module.css'
const Footer = () => {
  console.log("Footer component rendered");
  // Restante do código...

  return (
    <footer className={style.footer}>
      <h3>
    O melhor lugar para adquirir sua nova casa! 
      </h3>

      <p> New Home &copy; 2024 </p>
    
    </footer>
    
  );
}


export default Footer
