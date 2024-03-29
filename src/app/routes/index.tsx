import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { Login } from '../pages/login/Login'

export function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products" element={<h1>Oi</h1>}/>
        <Route path="*" element={<Navigate to="/"/>}/> {/* para qualquer outra rota será redirecionado para "/" */}
      </Routes>
    </BrowserRouter>
  )
}