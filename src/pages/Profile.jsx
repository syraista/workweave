import Navigationbar from '../component/Navigationbar'
import Footer from '../component/Footer'
import '../css/Profile.css'
import { Link } from 'react-router-dom';

export default function Profile() {
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
            <section className='profsec'>
                <div className='profcontain'>
                    <div className="profile-container">
                        <img id='profimg' src='/assets/profile-dummy.png' />
                        <span id='editppbtn' className="material-symbols-outlined">
                            edit
                        </span>
                    </div>
                    <div className='profiledesccnt'>
                        <h5>Muhammad Raihan Iqbal</h5>
                        <p>@Raihan</p>
                        <p>Kerja Kerja Kerja</p>
                    </div>
                    <div className="d-flex align-items-center gap-2 catprt">
                        <div className="d-flex align-items-center gap-1 catpstarcnt">
                            {renderStars()}
                        </div>
                        9,7/10
                    </div>
                    <button id='editprfbtn'>Edit Profil</button>
                    <div></div>
                    <hr/>
                    <div></div>
                    <hr/>
                    <Link to="/" id='linkwrapprflg' >
                        <button id='logoutbtn'>
                            <span className="material-symbols-outlined">
                                logout
                            </span>
                            Keluar
                        </button>
                    </Link>
                </div>
                <div className='editprofcontain'></div>
            </section>
            <Footer />
        </>
    )
}

