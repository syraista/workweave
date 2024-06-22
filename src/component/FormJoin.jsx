// import '../css/formjoin.css';

export default function FormJoin(props) {
  return (
    <section className="formjoinsec">
      <h2>Formulir Pengajuan Gabung Proyek</h2>
      <form className="formjoin">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Nama Lengkap</label>
            <input type="text" id="name" name="name" placehholder="Nama Lengkap" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Nomor Handphone</label>
            <input type="text" id="phone" name="phone" placeholder="Nomor Handphone" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Alamat Email</label>
            <input type="email" id="email" name="email" placeholder="Alamat Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Jenis Kelamin</label>
            <input type="text" id="gender" name="gender" placeholder="Jenis Kelamin" required />
          </div>
          <div className="form-group full-width">
            <label htmlFor="skills">Keterampilan</label>
            <textarea id="skills" name="skills" rows="4" placeholder="Keterampilan" required></textarea>
          </div>
          <div className="form-group full-width">
            <label htmlFor="cv">Unggah CV</label>
            <input type="file" id="cv" name="cv" placeholder="Lampirkan File" accept=".pdf,.doc,.docx" required />
          </div>
        </div>
        <button type="submit" className="submit-button">
          AJUKAN PENGAJUAN
        </button>
      </form>
    </section>
  );
}
