import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SingIn } from '../../pages/sign-in'
import { SignUp } from '../../pages/sign-up'
import { Patient } from '../../pages/patient'
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/paciente" element={<Patient />} />
      </Routes>
    </BrowserRouter>
  )
}
