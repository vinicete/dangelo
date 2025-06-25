import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
function EspCard({img,title,text}){

  return(
    <div className="bg-white/10 w-[510px] shadow-xl backdrop-blur-lg rounded-2xl text-white flex flex-col items-center justify-center gap-2.5  ">

      <img className="rounded-t-2xl" src={`/images/${img}`} alt="" />
      <h3 className="text-center text-[24px] pt-2 font-semibold ">{title}</h3>
      <div className="border-b-2 w-[60%] mt-[-8px] border-white/30"></div>
      
      <div className="pb-12 pt-4 font-light w-[310px] h-[150px]">
        <ul>
          <li>
            <div className="flex items-center gap-2 ">
              <FontAwesomeIcon className="" icon={faChevronRight}/>
              {text[0]}
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon className="" icon={faChevronRight}/>
              {text[1]}
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon className="" icon={faChevronRight}/>
              {text[2]}
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default EspCard