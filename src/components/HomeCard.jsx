function HomeCard({img,title,text}){

  return(
    <div className="bg-pgreen/75 w-[320px] shadow-xl backdrop-blur-lg rounded-md text-white flex flex-col items-center justify-center gap-2.5 p-6 ">

      <img className="w-[65px]" src={`../public/images/${img}`} alt="" />
      <h3 className="text-center font-bold">{title}</h3>
      <p className="text-center text-sm">{text}</p>

    </div>
  )
}

export default HomeCard