import AuthPage from './pages/Auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
        </Routes> 
      </Router>
    </>
  )
}

export default App
