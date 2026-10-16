import './App.css'
import { Kartyak } from './components/Kartyak'

export default function App() {
  

  return (
    <>
      <header>
        <h1>Tanulsószobák neked</h1>
        <p>Találd meg a számodra megfelelő tanulóhelyet!</p>
      </header>
      <aside></aside>
      <article>
        <Kartyak />
      </article>
      <aside></aside>
      <footer>
        <p>Bernáth Milán</p>
      </footer>
    </>
  )
}
