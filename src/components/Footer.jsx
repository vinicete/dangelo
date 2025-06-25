import SocialButton from "./SocialButton"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

function Footer(){
  return(
    <div className="bg-pgreen w-full flex items-center justify-center">
      <div className="w-[70%] text-white py-[50px]">
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <img className="w-[100px]" src="/images/logo-branca.png" alt="" />
            <span className="font-semibold text-2xl">D'ANGELO</span>
            <span className="font-semibold text-2xl"> MED</span>
            <span className="font-light text-sm">Medicina Ocupacional</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-xl">Institucional:</span>
            <nav>
              <ul>
                <li className="font-light text-lg">Início</li>
                <li className="font-light text-lg">Sobre</li>
                <li className="font-light text-lg">Especialidades</li>
                <li className="font-light text-lg">Blog</li>
                <li className="font-light text-lg">Contato</li>
              </ul>
            </nav>
          </div>
          <div className="flex-col flex gap-2">
            <span className="font-semibold text-xl">Redes Sociais:</span>
            <div className="social flex gap-3">
                <SocialButton icon={faFacebookF} width={'text-2xl'}/>
                <SocialButton icon={faInstagram} width={'text-3xl'}/>
                <SocialButton icon={faWhatsapp} width={'text-3xl'}/>
              </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-xl">Localização:</span>
              <span className="font-light text-md">Rua Barão do Rio Branco, 
              493 - Centro</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-xl">Horário de funcionamento: </span>
              <div className="flex flex-col">
                <span className="font-light text-md">Segunda à Sexta - 09h às 18h </span>
                <span className="font-light text-md">Sábado - 09h às 13h</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Footer