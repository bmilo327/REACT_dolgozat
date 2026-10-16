import { TANULOSZOBAK, type SzobaTipus } from './adatok'
import './App.css'
import "./components/kartyak.css";
import { Kartyak } from './components/Kartyak'
import { useState } from 'react';
import { useKartyaContext } from './contexts/KartyaContext';

export default function App() {
  const {lista} = useKartyaContext()  

  return (
    <>
      <header>
        <h1>Tanulószobák neked</h1>
        <p>Találd meg a számodra megfelelő tanulóhelyet!</p>
      </header>
      <aside></aside>
      <article>
        <Kartyak lista={lista}/>
      </article>
      <aside></aside>
      <footer>
        <p>Bernáth Milán</p>
      </footer>
    </>
  )
}
