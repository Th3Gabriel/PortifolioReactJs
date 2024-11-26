import React from "react";
import "./Hero.css";
import perfil from "../../assets/eu.jpeg";

function Hero() {
  // Função para calcular a idade atualizada
  const calcularIdade = () => {
    const dataNascimento = "14/07/2002"; // Data de nascimento (DD/MM/YYYY)
    const [dia, mes, ano] = dataNascimento.split("/").map(Number);
    const nascimento = new Date(ano, mes - 1, dia); // Mês é zero-indexado
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();

    // Ajustar a idade se o aniversário não aconteceu ainda este ano
    const aniversarioEsteAno = new Date(hoje.getFullYear(), mes - 1, dia);
    if (hoje < aniversarioEsteAno) {
      idade--;
    }
    return idade;
  };

  return (
    <div className="neutral-bg">
      <div className="container hero-container">
        {/* Conteúdo de Texto */}
        <div className="text-container">
          <h2>Gabriel Martins Paz</h2>
          <p>Desenvolvedor</p>
          <p className="txt_about">
            Olá! Meu nome é Gabriel Martins, tenho {calcularIdade()} anos. Sou
            graduado em Ciência da Computação e atualmente estou me
            especializando em Engenharia de Software. Sou apaixonado por
            tecnologia e programação. No momento, atuo como desenvolvedor
            Front-End, mas meu objetivo é me tornar um desenvolvedor Full Stack.
          </p>
          <button className="contactButton">
              Entrar em contato
          </button>
        </div>

        {/* Imagem de Perfil */}
        <div className="image-container">
          <img src={perfil} className="perfil" alt="Perfil" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
