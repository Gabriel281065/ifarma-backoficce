import Image from "next/image";
import Link from "next/link";
import Logo from '@/assets/logo.png';


export default function recuperarSenha() {
  return (
  <section className="relative flex flex-wrap lg:h-screen lg:items-center">
    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    
    <div className="mx-auto max-w-lg text-center">
    
      <h1 className="text-2xl font-bold sm:text-3xl">Recuperar senha</h1>
      
      <p className="mt-4 text-gray-500">
        Preencha tudo corretamente
      </p>
    </div>

    <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="password" className="sr-only">password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Nova senha"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="/src/assets/cadeado.svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Senha</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Repetir senha"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="/public/cadeado.svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>
      <br />
      
       <button
          type="submit"
          className="inline-block  rounded-lg  bg-blue-500  px-10 py-3  text-sm font-medium text-white"
        > Continuar
        </button>
        
        </form>
    
  </div> 

  <div className="relative h-60 w-full sm:h-96 lg:h-full lg:w-1/2">
    <Image src={Logo} 
          width="150" 
          height="150" 
          alt="logo"
      
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
  
</section>
    
  );
}