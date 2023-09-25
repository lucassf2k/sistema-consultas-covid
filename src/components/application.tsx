import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { Router } from './router'
import { ToastContainer } from 'react-toastify'

export function Application() {
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  )
}
