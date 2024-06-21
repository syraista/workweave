import Navigationbar from '../component/Navigationbar';
import Footer from '../component/Footer';
import '../css/Profile.css';
import { Link } from 'react-router-dom';

export default function Profile() {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starColor = i < 5 ? 'star.svg' : 'star_gray.svg';
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
            <h5>Muhammad Raihan Iqbal</h5>
            <p>@Raihan</p>
            <p>Kerja Kerja Kerja</p>
          </div>
          <div className="d-flex align-items-center gap-2 catprt">
            <div className="d-flex align-items-center gap-1 catpstarcnt">{renderStars()}</div>
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
              <p>2024</p>
              <p>Yogyakarta</p>
              <p>79</p>
            </div>
          </div>
          <hr className="kemampuan-divider" />
          <h2 className="kemampuan-title">Kemampuan</h2>
          <div className="skills">
            <button className="skill-button">Desain Logo</button>
            <button className="skill-button">Desain Kemasan</button>
            <button className="skill-button">Desain Poster</button>
            <button className="skill-button">HTML+CSS</button>
            <button className="skill-button">App Developer</button>
          </div>
          <hr className="kemampuan-divider" />
          <Link to="/" id="linkwrapprflg">
            <button id="logoutbtn">
              <span className="material-symbols-outlined">logout</span>
              Keluar
            </button>
          </Link>
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
            <p>Muhammad Raihan Iqbal</p>
            <div className="info-row">
              <span className="info-title">Username</span>
              <span className="info-edit">
                <a href="#">Edit</a>
              </span>
            </div>
            <p>@Raihan</p>
            <div className="info-row">
              <span className="info-title">Deskripsi</span>
              <span className="info-edit">
                <a href="#">Edit</a>
              </span>
            </div>
            <p>Kerja Kerja Kerja</p>
            <div className="info-row">
              <span className="info-title">Asal</span>
              <span className="info-edit">
                <a href="#">Edit</a>
              </span>
            </div>
            <p>Yogyakarta</p>
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
