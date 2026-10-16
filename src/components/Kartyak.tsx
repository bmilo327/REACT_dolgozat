import type { SzobaTipus } from "../adatok"
import Kartya from "./Kartya"
import "./kartyak.css";

export interface KartyakProps {
    lista: SzobaTipus[],
}

export function Kartyak({lista}: KartyakProps) {
    return(
        <div className="kartyak">
            {lista.map((e, i) => (
                <Kartya szoba={e} index={i} key={i}/>
        ))}
        </div>
        
    )
}