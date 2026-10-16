import "./kartyak.css";
import { type SzobaTipus } from "../adatok";

export interface KartyaProps {
    szoba: SzobaTipus,
    index: number
}

export default function Kartya({szoba, index}: KartyaProps) {
    return(
        <div className="kartya">
            <h3>{szoba.szoba_nev}</h3>
            <p>{szoba.szobatipus}</p>
            <div>
                <p>{szoba.emelet}</p>
                <p>{szoba.ferohely}</p>
                <p>{szoba.foglalt_helyek}</p>
            </div>
            <button className="foglal-gomb">Helyet foglalok</button>
        </div>
    )
}