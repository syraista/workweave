import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomeNLI from './pages/Beranda/HomeNLI';
import HomeLI from './pages/Beranda/HomeLI';
import Proyek from './pages/Projek/Proyek';
import Notifikasi from './pages/Notifikasi';
import Faq from './pages/Faq';
import Profile from './pages/Profile';
import Buatproyek from './pages/Projek/Buatproyek';
import Kategori from './pages/Beranda/Kategori';
import KategoriItem from './pages/Beranda/KategoriItem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeNLI/>} />
        <Route path='/home' element={<HomeLI/>} />
        <Route path='/projects' element={<Proyek/>} />
        <Route path='/notifications' element={<Notifikasi/>} />
        <Route path='/faq' element={<Faq/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/projects/create' element={<Buatproyek/>} />
        <Route path='/category/:categoryName' element={<Kategori />} />
        <Route path='/category/:categoryname/:item' element={<KategoriItem />} />
      </Routes>
    </Router>
  )
}

export default App
