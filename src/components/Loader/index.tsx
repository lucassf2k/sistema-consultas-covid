import ReactDOM from 'react-dom'
import './styles.css'

export function Loader({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null
  return ReactDOM.createPortal(
    <div className="overlay">
      <div className="loader" />
    </div>,
    document.getElementById('loader-root')!,
  )
}
