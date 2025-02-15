import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function SocialButton({icon, width}){

  return(
    <div className="w-[50px] h-[50px] text-white flex items-center justify-center bg-pred rounded-full">
      <FontAwesomeIcon className={`${width} rounded-full`} icon={icon}/>
    </div>
  )
}

export default SocialButton