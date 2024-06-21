import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomeNLI from './pages/HomeNLI';
import HomeLI from './pages/HomeLI';
import Proyek from './pages/Proyek';
import Notifikasi from './pages/Notifikasi';
import Faq from './pages/Faq';
import Profile from './pages/Profile';
import Buatproyek from './pages/Buatproyek';
import Aplikasi from './pages/Aplikasi';
import AplikasiDescdummy from './pages/AplikasiDescdummy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeNLI/>} />
        <Route path='/Home' element={<HomeLI/>} />
        <Route path='/Proyek' element={<Proyek/>} />
        <Route path='/Notifikasi' element={<Notifikasi/>} />
        <Route path='/FAQ' element={<Faq/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/Buatproyek' element={<Buatproyek/>} />
        <Route path='/Aplikasi' element={<Aplikasi/>} />
        <Route path='/Aplikasidummy' element={<AplikasiDescdummy/>} />
      </Routes>
    </Router>
  )
}

export default App
