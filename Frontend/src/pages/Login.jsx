import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const API = 'http://localhost:5000/api/auth'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API}/login`, { username, password })
      setMessage(res.data.message)
      localStorage.setItem('username', username)
      setTimeout(() => navigate('/home'), 1000)
    } catch {
      setMessage('Login failed')
    }
  }

  return (
    <div className="p-4 max-w-sm mx-auto space-y-4">
      <h1 className="text-xl font-bold text-center">Login</h1>
      <input className="border p-2 w-full" placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input className="border p-2 w-full" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 w-full">Login</button>
      {message && <p className="text-center text-sm">{message}</p>}
    </div>
  )
}

export default Login
