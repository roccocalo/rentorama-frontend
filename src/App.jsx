import { Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Layout from "./Layout"

function App() {
  

  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      
        <Route path="" element={<Index />}/>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      
    </Route>
  </Routes>
  )
}

export default App
