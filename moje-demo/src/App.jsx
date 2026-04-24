import { useStore } from './store'

function App() {
  // Pobieramy dane i funkcje ze store'a
  const bears = useStore((state) => state.bears)
  const increase = useStore((state) => state.increasePopulation)
  const reset = useStore((state) => state.removeAllBears)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Prezentacja: Zustand</h1>
      <div style={{ fontSize: '50px', margin: '20px' }}>
        🐻 {bears}
      </div>
      <button 
        onClick={increase} 
        style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Dodaj misia
      </button>
      <br />
      <button 
        onClick={reset} 
        style={{ marginTop: '20px', background: 'none', border: 'none', color: 'red', cursor: 'pointer', textDecoration: 'underline' }}
      >
        Resetuj licznik
      </button>
    </div>
  )
}

export default App