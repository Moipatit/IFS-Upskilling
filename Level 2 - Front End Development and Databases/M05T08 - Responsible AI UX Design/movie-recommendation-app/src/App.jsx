import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import RecommendationReason from './components/RecommendationReason'
import MoviePrompt from './components/MoviePrompt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MoviePrompt/>
    <RecommendationReason/>

    </>
  )
}

export default App
