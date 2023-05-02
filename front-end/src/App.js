import LoginPage from './Components/LoginPage'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App;
