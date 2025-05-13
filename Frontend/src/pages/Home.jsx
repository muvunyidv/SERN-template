import Navbar from '../Components/Navbar'

function Home() {
  const username = localStorage.getItem('username') || 'User'

  return (
    <div>
      <Navbar />
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
        <p className="text-gray-600">You have successfully logged in.</p>
      </div>
    </div>
  )
}

export default Home
