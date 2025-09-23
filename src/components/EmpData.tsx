
import {  createContext, useContext, useState, type ReactNode } from "react"

export type Emps = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city:string,
      zipcode: number,
      geo: {
        lat: number,
        lng: number
      }
    },
    phone: number,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string,
    }
  }

export type EmpContextType = {
  info: Emps[];
  setInfo: React.Dispatch<React.SetStateAction<Emps[]>>;
};



const EmpContext = createContext<EmpContextType | undefined>(undefined)

export const EmpProvider = ({children}: {children:ReactNode})=>{
    const [info,setInfo] = useState<Emps[]>([])
    return(
      <EmpContext.Provider value={{info,setInfo}}>
        {children}
      </EmpContext.Provider>
    )
}

const EmpData = ()=>{
  const context = useContext(EmpContext)
  if (!context) {
    throw new Error("context is empty");
  }

  return context
}

export default EmpData


