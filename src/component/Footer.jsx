import '../css/navbarandfooter.css';
export default function Footer() {
  return (
    <footer className="text-white footermain">
      <div className="container">
        <div id="footer-row" className="row">
          <div className="col-md-4 footerintro">
            <div className="footerlogo">
              <img src="../../Logo_new.svg" />
            </div>
            <p>
              Di sini, Anda akan bertemu dengan orang-orang kreatif dari berbagai latar belakang dan industri. Kolaborasi lintas disiplin ilmu sering kali menghasilkan solusi yang paling inovatif, dan kami mengundang Anda untuk bergabung
              dalam jaringan koneksi yang menginspirasi di Pusat Kolaborasi kami.
            </p>
            <div className="d-flex gap-4">
              <img src="/assets/Instagram.png" />
              <img src="/assets/facebook.png" />
              <img src="/assets/Twit.png" />
            </div>
          </div>
          <div className="col-md-4 footerlistcont">
            <div>
              <h5 className="footlisttitle">Navigation</h5>
              <ul className="list-unstyled footlist">
                <li>
                  <a href="#" className="flisttext">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="flisttext">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="flisttext">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="flisttext">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 footerlistcont">
            <div>
              <h5 className="footlisttitle">Contact Us</h5>
              <ul className="list-unstyled footlist">
                <li>
                  <p className="flisttext">workweave@gmail.com</p>
                </li>
                <li>
                  <p className="flisttext">
                    Jl. Diponegoro,
                    <br /> Yogyakarta, DIY 15133
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright 2024 Work Weave</p>
      </div>
    </footer>
  );
}
