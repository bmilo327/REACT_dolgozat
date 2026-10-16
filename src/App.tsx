import { TANULOSZOBAK } from './adatok'
import './App.css'
import "./kartyak.css";
import { Kartyak } from './components/Kartyak'

export default function App() {
  

  return (
    <>
      <header>
        <h1>Tanulószobák neked</h1>
        <p>Találd meg a számodra megfelelő tanulóhelyet!</p>
      </header>
      <aside></aside>
      <article>
        <Kartyak lista={TANULOSZOBAK}/>
      </article>
      <aside></aside>
      <footer>
        <p>Bernáth Milán</p>
      </footer>
    </>
  )
}
