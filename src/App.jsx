import { Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Layout from "./Layout"
import axios from "axios"
import { UserContextProvider } from "./UserContext"


function App() {
  
  axios.defaults.baseURL = 'http://localhost:3000';

  return (
    <UserContextProvider>
    <Routes>
    <Route path="/" element={<Layout />}>
      
        <Route path="" element={<Index />}/>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      
    </Route>
  </Routes>
  </UserContextProvider>
  )
}

export default App
