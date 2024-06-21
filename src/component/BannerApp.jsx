import '../css/bannerapp.css';

export default function BannerApp() {
  return (
    <section className="d-flex w-100 justify-content-between align-items-center" style={{ padding: '20px 100px' }}>
      <div className="titletextbanapp">
        <h1 style={{ color: '#1f79e5', fontSize: '50px', fontWeight: 'bold' }}>Aplikasi</h1>
        <p style={{ fontSize: '24px', color: '#7e7e7e' }}>
          Temukan berbagai ide proyek aplikasi yang dapat
          <br />
          menginspirasimu
        </p>
      </div>
      <img style={{ width: '313px', height: '313px' }} src="assets/kategori-app/bannerapp.png" />
    </section>
  );
}
