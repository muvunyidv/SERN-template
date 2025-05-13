import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API = 'http://localhost:5000/api/auth'

function Navbar() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await axios.get(`${API}/logout`)
    localStorage.removeItem('username')
    navigate('/login')
  }

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">MyApp</h1>
      <button onClick={handleLogout} className="bg-red-500 px-4 py-1 rounded">Logout</button>
    </div>
  )
}

export default Navbar
