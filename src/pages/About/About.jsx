import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o New <span>Home</span>
      </h2>
      <p>
      O projeto é um site especializado na venda de propriedades, construído com React e JavaScript, integrado ao Firebase para armazenamento e gerenciamento de dados. Essa plataforma proporciona um ambiente dinâmico e interativo para artistas e entusiastas de design compartilharem suas criações e experiências.
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
