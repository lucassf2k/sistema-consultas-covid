import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SingIn } from '../../pages/sign-in'
import { SignUp } from '../../pages/sign-up'
import { Patient } from '../../pages/patient'
import { Doctor } from '../../pages/doctor'
import { DadosMedico } from '../../pages/profile'
import { AuthProvider } from '../../contexts/auth-context'
import { PrivateRoute } from './private-route'

export function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SingIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/paciente"
            element={
              <PrivateRoute>
                <Patient />
              </PrivateRoute>
            }
          />
          <Route 
            path="/paciente/profile"
            element={
              <PrivateRoute>
                <DadosMedico />
              </PrivateRoute>
            }
          />
          <Route
            path="/medico"
            element={
              <PrivateRoute>
                <Doctor />
              </PrivateRoute>
            }
          />
          <Route 
            path="/medico/profile"
            element={
              <PrivateRoute>
                <DadosMedico />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
