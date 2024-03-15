import { useSiContext } from './hooks/useSiContext'
import { InforCard } from './componets/InfoCard'
import './App.css'

function App() {
  const { gpuName, gpuTemp } = useSiContext()

  console.log(gpuName)

  return (
    <div className="App">
      <InforCard title={gpuName} value={gpuTemp} />
    </div>
  )
}

export default App
