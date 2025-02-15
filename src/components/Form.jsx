
function Form(){
  return(
    <form className="flex flex-col  gap-3" action={()=>{}}>
      <input className="border rounded placeholder:text-pgreen placeholder:text-md border-pgreen p-2 h-[50px]" placeholder="Nome" type="text" name="nome" id="nome" />
      <input className="border rounded placeholder:text-pgreen placeholder:text-md border-pgreen p-2 h-[50px]" type="text" placeholder="Email" name="email" id="email" />
      <input className="border rounded placeholder:text-pgreen placeholder:text-md border-pgreen p-2 h-[120px]" type="textarea" placeholder="Mensagem" name="msg" id="msg" />
      <button className="w-full text-white text-md drop-shadow-lg py-2 px-4 pr-8  bg-pred rounded-lg font-semibold" type="submit">Enviar</button>
    </form>
  )
}

export default Form 