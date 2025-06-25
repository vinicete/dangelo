import ButtonRed from "./ButtonRed"


function Home(){

  return(
    <section id="" className="flex items-center justify-center text-white bg-[url('/images/bg-clinica.png')]">
      <div className="w-[70%] py-[150px] flex flex-col gap-7">
        <div className="font-bold text-[42px] gap-0">
          <h1 className="w-[350px] leading-[48px]">
            Bem vindo à D’Angelo Med
          </h1>
        </div>
        
        <p className="w-[485px] mb-5">
          Cuidando da saúde e segurança do seu time para um 
         ambiente de trabalho mais produtivo e sustentável.
        </p>

        <ButtonRed text={"Agendar Consulta"}/>
      </div>
    </section>
  )
}

export default Home