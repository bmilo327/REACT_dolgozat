import "./kartyak.css";
import { type SzobaTipus } from "../adatok";
import { useKartyaContext } from "../contexts/KartyaContext";

export interface KartyaProps {
    szoba: SzobaTipus,
    index: number,
    
}

export default function Kartya({szoba, index}: KartyaProps) {
    const {szobaKivalaszt} = useKartyaContext()
    
    return(
        <div className="kartya">
            <h3>{szoba.szoba_nev}</h3>
            <p>{szoba.szobatipus}</p>
            <div className="szoba-tulajdonsagok">
                <p>ID {szoba.id}</p>
                <p>Szobatípus {szoba.szobatipus}</p>
                <p>Emelet {szoba.emelet}.</p>
                <p>Férőhely {szoba.ferohely} fő</p>
                <p>Foglalt helyek {szoba.foglalt_helyek} fő</p>
            </div>
            <button className="foglal-gomb" onMouseDown={()=>{szobaKivalaszt(index)}}>Helyet foglalok</button>
        </div>
    )
}