import '../css/bannerhome.css'
import Form from 'react-bootstrap/Form';
export default function Bannerhome(props) {
    return (
        <section className="bannerhomesec">
            <div className='titletextban'>
                <div>
                    <h1>Selamat datang di<br/>WorkWeave,<br/><span>{props.name}</span></h1>
                    <p>Temukan berbagai pekerjaan lepas yang sesuai<br/> dengan passion dan keterampilanmu, dan sukses<br/> bersama kami</p>
                </div>
                <div className="input-containerhom">
                    <span className="material-symbols-outlined search-icon">
                        search
                    </span>
                    <Form.Control id='homesearch' type="email" placeholder="Masukkan Pencarian apa yang anda butuhkan" />
                </div>
            </div>
            <img src='assets/bannerhome.png' />
        </section>
    );
}