import { createContext, useContext, useState, type ReactNode } from "react"
import  { TANULOSZOBAK, type SzobaTipus } from "../adatok"

type KartyaContextValue = {
    lista: SzobaTipus[],
    szobaKivalaszt: (index: number) => void
}

export const KartyaContext = createContext<KartyaContextValue | undefined>(undefined)

type KartyaProviderProps = {
    children : ReactNode;
}

export function KartyaProvider({children}: KartyaProviderProps) {
    const [lista, setLista] = useState(TANULOSZOBAK)

    function szobaKivalaszt(index: number) {
    if (lista[index].ferohely === lista[index].foglalt_helyek) {
      return
    }

    const ujLista: SzobaTipus[] = [...lista]
    ujLista[index].foglalt_helyek += 1
    
    setLista(ujLista)
  }

  return(
    <KartyaContext.Provider 
        value={{
            lista: TANULOSZOBAK,
            szobaKivalaszt
        }}>
        {children}   
    </KartyaContext.Provider>
  )
}

export function useKartyaContext() {
    const context = useContext(KartyaContext)
    if (context === undefined) {
        throw new Error("useKartyaContext a KepProvider-en belül kell lennie");
    }
    return context
}