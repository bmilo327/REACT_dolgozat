import { TANULOSZOBAK } from './adatok'
import './App.css'
import "./kartyak.css";
import { Kartyak } from './components/Kartyak'
import { useState } from 'react';

export default function App() {

  function ferohelyNovel(index:number) {
    
  }

  return (
    <>
      <header>
        <h1>Tanulószobák neked</h1>
        <p>Találd meg a számodra megfelelő tanulóhelyet!</p>
      </header>
      <aside></aside>
      <article>
        <Kartyak lista={TANULOSZOBAK} ferohelyNovel ={ferohelyNovel}/>
      </article>
      <aside></aside>
      <footer>
        <p>Bernáth Milán</p>
      </footer>
    </>
  )
}
