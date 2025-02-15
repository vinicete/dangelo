import EspCard from "./EspCard"


function Especialidades(){
  let imgvet = ["card1.jpg","card2.jpg","card3.jpg","card4.jpg"]
  let titlevet = ["Assessoria em Fiscalizações","Elaboração de Documentos","Implantação e-Social","Perícias Médicas"]
  let textvet = [
    [
    "Preparação Prévia",
    "Acompanhamento de Fiscalizações",
    "Treinamentos e Regularizações"
  ],
  [
    "PCMSO, PGR, LTCAT e PPP   ",
    "Terceirização de Ambulatório Médico Ocupacional",
    "Normas Regulamentadoras"

  ],
  [
    "Preparação Prévia",
    "Acompanhamento de Fiscalizações",
    "Treinamentos e Regularizações"
  ],
  [
    "Preparação Prévia",
    "Acompanhamento de Fiscalizações",
    "Treinamentos e Regularizações"
  ]
  ]
  return(
    <section className="flex items-center justify-center bg-pgreen text-white">
      <div className="w-[70%]  py-[70px] flex items-center flex-col gap-7">
        <h2 className="text-[42px] font-bold">Nossas Especialidades</h2>
        <div className="flex flex-col gap-[70px]" id="cards">
          <div className="flex gap-[70px]">
            <EspCard img={imgvet[0]} title={titlevet[0]} text={textvet[0]}/>
            <EspCard img={imgvet[1]} title={titlevet[1]} text={textvet[1]}/>
          </div>
          <div className="flex gap-[70px]">
            <EspCard img={imgvet[2]} title={titlevet[2]} text={textvet[2]}/>
            <EspCard img={imgvet[3]} title={titlevet[3]} text={textvet[3]}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Especialidades