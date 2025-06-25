function Navbar(){
  return(
    <nav id="home" className="flex items-center justify-center">

    <div className="navcont text-pgreen  py-4 px-4 flex flex-row items-center justify-between w-[70%]">
    <img className="w-[50px]" src="/images/logo-red.png" alt="Logo" />

      <ul className="flex gap-6 font-bold">
        <li className=""><a href="#home">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#especialidades">Especialidades</a></li>
        <li>Blog</li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </div>

    </nav>
  )
}

export default Navbar