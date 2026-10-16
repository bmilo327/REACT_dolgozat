import { type SzobaTipus } from "../adatok";

export interface KartyaProps {
    szoba: SzobaTipus[],
}

export default function Kartya({szoba_nev, szobatipus, emelet, ferohely, foglalt_helyek}: SzobaTipus) {
    return(
        <div className="kartya">
            <h1>{szoba_nev}</h1>
            <p>{szobatipus}</p>
            <div>
                <p>{emelet}</p>
                <p>{ferohely}</p>
                <p>{foglalt_helyek}</p>
            </div>
            <button className="foglal-gomb"></button>
        </div>
    )
}