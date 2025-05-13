import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const API = 'http://localhost:5000/api/auth'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${API}/register`, { username, password })
      setMessage(res.data.message)
      setTimeout(() => navigate('/login'), 1000)
    } catch {
      setMessage('Registration failed')
    }
  }

  return (
    <div className="p-4 max-w-sm mx-auto space-y-4">
      <h1 className="text-xl font-bold text-center">Register</h1>
      <input className="border p-2 w-full" placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input className="border p-2 w-full" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister} className="bg-green-500 text-white p-2 w-full">Register</button>
      {message && <p className="text-center text-sm">{message}</p>}
    </div>
  )
}

export default Register
