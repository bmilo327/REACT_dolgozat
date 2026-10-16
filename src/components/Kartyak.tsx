import type { SzobaTipus } from "../adatok"
import Kartya from "./Kartya"

export interface KartyakProps {
    lista: SzobaTipus[],
}

export function Kartyak({lista}: KartyakProps) {
    return(
        <div>
            {lista.map((e, i) => (
                <Kartya szoba={e} index={i} key={i}/>
        ))}
        </div>
        
    )
}