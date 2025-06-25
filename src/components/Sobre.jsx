

function Sobre(){

  return(
    <section id="sobre" className="flex items-center justify-center ">
      <div className="w-[70%]  pb-[90px] flex items-center flex-col gap-7">
        <div className="w-[70%] pb-[20px] border-t-[1px] border-pgreen"></div>
        <h2 className="text-[42px] font-bold text-pgreen" >Quem Somos?</h2>
        <div className="flex flex-row gap-10">
          <img className="w-[408px] rounded-2xl" src="/images/doutora.png" alt="" />
          <div id="textos" className="text-pgray flex flex-col justify-center text-[16px] gap-10">
            <p>Na <strong className="text-pgreen">D'Angelo Med</strong>, cuidamos da saúde ocupacional com 
              excelência e compromisso. Com uma equipe multidisciplinar 
              altamente <strong>qualificada</strong>, oferecemos soluções completas para 
              promover o bem-estar dos colaboradores e o cumprimento das
              normas de segurança e <strong>saúde</strong> do trabalho.
            </p>
           <p>Nosso objetivo é ser parceiros das empresas, garantindo um 
              ambiente de trabalho mais seguro, produtivo e alinhado às 
              melhores práticas do mercado. Com tecnologia de ponta e 
              atendimento personalizado, estamos prontos para atender 
              às suas necessidades com <strong>qualidade e eficiência</strong>.
            </p>

            <div className="pt-10 flex flex-col gap-0">
              <p className="font-semibold">Alguns dos nosso valores são:</p>
              <p className="text-lg text-pgreen"><strong>Saúde</strong>, <strong>Segurança</strong> e <strong>Responsabilidade</strong> para o sucesso 
              do seu negócio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre