import Navigationbar from "../component/Navigationbar";
import Footer from "../component/Footer";
import "../css/Profile.css";
import Cookies from 'js-cookie';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { logoutRequest } from '../service/authRequest';

export default function Profile() {
  const navigate = useNavigate();

  const removeAllCookies = () => {
    const allCookies = Cookies.get();
    Object.keys(allCookies).forEach(cookieName => {
      Cookies.remove(cookieName);
    });
  };

  const formatDate = (dateString) => {
    return moment(dateString).format('MMMM Do YYYY');
  };

  const handleLogout = async () => {
    try {
      const request = {
        sessionId: Cookies.get('sessionId')
      }
      const response = await logoutRequest(request);
      console.log('Logout Successful:', response);
      // Redirect or further processing
      navigate('/');
      // Clear cookies or session storage if necessary
      removeAllCookies();
    } catch (error) {
      console.error('Logout Failed:', error.message);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starColor = i < 5 ? "star.svg" : "star_gray.svg";
      stars.push(<img key={i} src={`/assets/${starColor}`} />);
    }
    return stars;
  };

  return (
    <>
      <Navigationbar log={1} navn={0} />
      <section className="profsec">
        <div className="profcontain">
          <div className="profile-container">
            <img id="profimg" src="/assets/profile-dummy.png" />
            <span id="editppbtn" className="material-symbols-outlined">
              edit
            </span>
          </div>
          <div className="profiledesccnt">
            <h5>{Cookies.get('name')}</h5>
            <p>@{Cookies.get('username')}</p>
            <p>{Cookies.get('bio')}</p>
          </div>
          <div className="d-flex align-items-center gap-2 catprt">
            <div className="d-flex align-items-center gap-1 catpstarcnt">
              {renderStars()}
            </div>
            9,7/10
          </div>
          <button id="editprfbtn">Edit Profil</button>
          <hr />
          <div className="profile-info">
            <div>
              <p>Bergabung Sejak</p>
              <p>Asal</p>
              <p>Proyek Selesai</p>
            </div>
            <div>
              <p>{formatDate(Cookies.get('created_at'))}</p>
              <p>{Cookies.get('address')}</p>
              <p>79</p>
            </div>
          </div>
          <hr />
          <h2 className="kemampuan-title">Kemampuan</h2>
          <div className="skills">
            <button className="skill-button">Desain Logo</button>
            <button className="skill-button">Desain Kemasan</button>
            <button className="skill-button">Desain Poster</button>
            <button className="skill-button">HTML+CSS</button>
            <button className="skill-button">App Developer</button>
          </div>
          <hr />
          <button id="logoutbtn" onClick={handleLogout}>
            <span className="material-symbols-outlined">logout</span>
            Keluar
          </button>
        </div>
        <div className="editprofcontain">
          <h2>Edit Profil</h2>
          <hr className="edit-profile-divider" />
          <div className="info-section">
            <div className="info-row">
              <span className="info-title">Nama Lengkap</span>
              <span className="info-edit">
                <a href="#">Edit</a>
              </span>
            </div>
            <p>{Cookies.get('name')}</p>
            <div className="info-row">
              <span className="info-title">Username</span>
              <span className="info-edit">
                <a href="#">Edit</a>
              </span>
            </div>
            <p>@{Cookies.get('username')}</p>
            <div className="info-row">
              <span className="info-title">Deskripsi</span>
              <span className="info-edit">
                <a href="#">Edit</a>
              </span>
            </div>
            <p>{Cookies.get('bio')}</p>
            <div className="info-row">
              <span className="info-title">Asal</span>
              <span className="info-edit">
                <a href="#">Edit</a>
              </span>
            </div>
            <p>{Cookies.get('address')}</p>
            <div className="info-row">
              <span className="info-title">Kemampuan</span>
              <span className="info-edit">
                <a href="#">Tambah</a>
              </span>
            </div>
            <div className="skills">
              <button className="skill-button">Desain Logo</button>
              <button className="skill-button">Desain Kemasan</button>
              <button className="skill-button">Desain Poster</button>
              <button className="skill-button">HTML+CSS</button>
              <button className="skill-button">App Developer</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
