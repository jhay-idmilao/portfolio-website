import { useTheme } from './hooks'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <div className="app">
      <TopBar theme={theme} onToggleTheme={toggleTheme} />
      <main className="container">
        <Hero />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
