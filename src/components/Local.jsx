import MapApi from "./MapApi"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapLocationDot} from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-solid-svg-icons"

function Local(){
  return(
    <section className="flex items-center justify-center text-pgreen ">
      <div className="w-[70%]  py-[70px] flex items-center flex-col gap-7">
      <div className="w-[70%] pb-[20px] border-t-[1px] border-pgreen"></div>
        <div className="flex px-[50px] py-[50px] gap-[54px]  rounded-2xl " >
          <div className="flex flex-col gap-10 justify-center">
            <h2 className="text-[42px] font-bold leading-10">Onde estamos
            localizados?</h2>
            <div className="flex items-center justify-center gap-3">
              <FontAwesomeIcon className="text-4xl text-pred" icon={faMapLocationDot}/>
              <p className="font-medium text-[22px] leading-6">R. Barão do Rio Branco, 
              493 - Centro</p>
            </div>
            <div className="mt-10 flex flex-col gap-2">
              <p className="text-[20px] font-bold">Horário de funcionamento:</p>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon className="text-pred text-4xl" icon={faClock}/>
                <div className="text-md font-medium">
                  <p>Segunda à Sexta - 09h às 18h</p>
                  <p>Sábado - 09h às 13h</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <MapApi/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Local