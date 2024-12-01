// Hero.jsx
import "./Hero.css";
import perfil from "../../assets/eu.jpeg";
import useAOS from "../../Hooks/AOS";

const Hero = () => {
  useAOS( { duration: 2000 });

  const calcularIdade = () => {
    const dataNascimento = "14/07/2002";
    const [dia, mes, ano] = dataNascimento.split("/").map(Number);
    const nascimento = new Date(ano, mes - 1, dia);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();

    const aniversarioEsteAno = new Date(hoje.getFullYear(), mes - 1, dia);
    if (hoje < aniversarioEsteAno) {
      idade--;
    }
    return idade;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="neutral-bg hero-section">
        <div className="container hero-container" data-aos="fade-up">
          {/* Texto */}
          <div className="text-container" data-aos="fade-right">
            <h2>Gabriel Martins Paz</h2>
            <p>Desenvolvedor</p>
            <p className="txt_about">
              Olá! Meu nome é Gabriel Martins, tenho {calcularIdade()} anos. Sou
              graduado em Ciência da Computação e atualmente estou me
              especializando em Engenharia de Software. Sou apaixonado por
              tecnologia e programação. No momento, atuo como desenvolvedor
              Front-End, mas meu objetivo é me tornar um desenvolvedor Full
              Stack.
            </p>
            <button className="contactButton" data-aos="zoom-in">
              Entrar em contato
            </button>
          </div>

          {/* Imagem */}
          <div className="image-container" data-aos="fade-left">
            <img src={perfil} className="perfil" alt="Perfil" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
