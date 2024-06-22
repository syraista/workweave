// import '../css/bannerdatabaseapp.css';

export default function BannerDatabaseApp(props) {
  return (
    <section className="bannerdatabaseappsec">
      <div className="titletextbandatabaseapp">
        <div>
          <h3>Database Pengguna dan Penjual</h3>
          <p>
            Proyek ini bertujuan untuk membuat database yang memuat informasi pengguna dan penjual dalam
            <br />
            konteks platform e-commerce. Database ini akan mencakup data pengguna, seperti informasi pribadi,
            <br />
            riwayat pembelian, dan preferensi, serta data penjual, termasuk informasi toko, inventaris produk, dan <br />
            riwayat transaksi. Implementasi database ini akan memungkinkan platform e-commerce untuk mengelola
            <br />
            informasi pengguna dan penjual dengan efisien, meningkatkan pengalaman pengguna, dan mendukung
            <br />
            operasional bisnis yang lebih lancar.
          </p>
          <hr />
          <button className="join-button">GABUNG</button>
        </div>
      </div>
      <img src="assets/kategori-app/bannerdatabaseapp.png" />
    </section>
  );
}
