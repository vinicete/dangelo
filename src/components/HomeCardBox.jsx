import HomeCard from "./HomeCard"

function HomeCardBox(){

  let titlevet = ["Exames Admissionais","Avaliação Psicossocial","Consultoria"]
  let textvet = ["Avaliações para garantir que o colaborador está apto a exercer suas funções, conforme normas regulamentadoras.",
    "Análise emocional e comportamental para funções de risco, promovendo segurança no trabalho.",
  "Suporte para adequação às normas,elaboração de programas ocupacionais e redução de riscos."]
  let imgvet = ["exame-branco.png","pesquisar-branco.png","consulta-branco.png"]
  return(
    <section className="flex items-center mb-[70px] justify-center">
      <div className="w-[70%] mt-[-64px] flex justify-center gap-[70px]">
        <HomeCard text={textvet[0]} title={titlevet[0]} img={imgvet[0]}/>
        <HomeCard text={textvet[1]} title={titlevet[1]} img={imgvet[1]}/>
        <HomeCard text={textvet[2]} title={titlevet[2]} img={imgvet[2]}/>
      </div>
    </section>
  )
}


export default HomeCardBox