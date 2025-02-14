
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200">
      <div className="text-center glass-card p-8">
        <h1 className="text-4xl font-bold mb-4 text-primary-600">404</h1>
        <p className="text-xl text-primary-500 mb-6">Oops! Página não encontrada</p>
        <button 
          onClick={() => navigate("/")}
          className="button-primary"
        >
          Voltar para Home
        </button>
      </div>
    </div>
  )
}

export default NotFound
