import SocialButton from "./SocialButton"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Form from "./Form";

function Contato(){
  return(
    <section id="contato" className="flex items-center justify-center text-pgreen ">
      <div className="w-[70%]  py-[70px] flex items-center flex-col gap-7">
        <h2 className="text-[42px] font-bold">Fale Conosco</h2>
        <div className="flex px-[50px] py-[30px] gap-[84px] shadow-lg rounded-2xl " >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h3 className="w-[382px]  font-medium text-[27px]">Contate-nos por nossas
              redes sociais e email: </h3>
              <div className="social flex gap-3">
                <SocialButton icon={faFacebookF} width={'text-2xl'}/>
                <SocialButton icon={faInstagram} width={'text-3xl'}/>
                <SocialButton icon={faWhatsapp} width={'text-3xl'}/>
              </div>
              
            </div>

            <Form/>
            
          </div>
          <div className="">
            <img className="rounded-xl w-[415px]" src="../public/images/equipe.jpeg" alt="" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contato