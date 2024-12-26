import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o New <span>Home</span>
      </h2>
      <p>
        Tenho 19 anos e estou cursando Engenharia da Computação na USF e Análise e Desenvolvimento de Sistemas na UNICSUL, ambos no 3º semestre. Sou formado em Técnico em Informática pela ETEC e atualmente estagio na área de Infraestrutura de TI. Tenho grande interesse na área de desenvolvimento e busco aprender Java, React e Python para fortalecer minhas habilidades como desenvolvedor, criando soluções inovadoras e impactantes. Procuro uma oportunidade de estágio na área de desenvolvimento para aplicar e expandir meus conhecimentos, contribuindo para projetos desafiadores e de alto impacto.    
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
