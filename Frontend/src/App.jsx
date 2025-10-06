import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { GoogleLogin } from './GoogleLogin.jsx'
import { Dashboard } from './Dashboard.jsx'
import { PageNotFound } from './PageNotFound.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ProtectedRoute } from './ProtectedRoute.jsx'

function App() {

  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <GoogleLogin />
      </GoogleOAuthProvider>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          localStorage.getItem("user") ? <Navigate to="/dashboard" replace />:<GoogleAuthWrapper />
          } 
        />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
