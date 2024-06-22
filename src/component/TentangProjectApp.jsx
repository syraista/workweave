import '../css/tentangprojectapp.css';
import Nav from 'react-bootstrap/Nav';

function JustifiedExample() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

function TentangProjectApp(props) {
  return (
    <section className="tentangprojectappsec">
      <div className="titletexttentangprojectapp">
        <div>
          <h3>Database Pengguna dan Penjual</h3>
          <p>
            Latar Belakang:
            <br />
            Dalam konteks pertumbuhan e-commerce yang pesat, manajemen data pengguna dan penjual menjadi krusial untuk
            <br />
            kesuksesan platform. Untuk itu, proyek ini ditujukan untuk membangun sebuah database yang menyimpan informasi
            <br /> pengguna dan penjual dengan sistematis dan efisien. <br />
            <br />
            Tujuan Proyek: Tujuan utama dari proyek ini adalah menciptakan sebuah database yang dapat mengelola informasi pengguna dan <br />
            penjual dengan akurat, aman, dan dapat diakses dengan cepat. Database ini akan menjadi pondasi bagi fitur-fitur lain <br />
            dalam platform e-commerce, seperti personalisasi pengalaman pengguna, manajemen inventaris, dan analisis kinerja <br />
            penjualan.
          </p>
          <h3>Pemilik Proyek</h3>
        </div>
      </div>
      <img src="assets/kategori-app/bannerdatabaseapp.png" alt="Banner Database App" />
    </section>
  );
}

export { JustifiedExample, TentangProjectApp };
