import "../css/kategorilisthome.css";
import Kategoricard from "./element/kategoricard";

const kategori = [
  {
    title: "Aplikasi",
    img: "assets/kategori-icon/aplikasi.png",
    desc: "Aplikasi Web maupun Mobile",
    link: "/category/aplikasi",
  },
  {
    title: "Arsitektur",
    img: "assets/kategori-icon/arsitektur.png",
    desc: "Desain Rumah yang Inovatif",
    link: "/category/arsitektur",
  },
  {
    title: "Desain Grafis",
    img: "assets/kategori-icon/desain-grafis.png",
    desc: "Karya Seni Digital",
    link: "/category/desain-grafis",
  },
  {
    title: "Desain Produk",
    img: "assets/kategori-icon/desain-produk.png",
    desc: "Solusi yang Estetis dan Fungsional",
    link: "/category/desain-produk",
  },
  {
    title: "Desain Interior",
    img: "assets/kategori-icon/desain-interior.png",
    desc: "Menciptakan Ruang yang Memikat dan Berfungsional",
    link: "/category/desain-interior",
  },
  {
    title: "Fotografi",
    img: "assets/kategori-icon/fotografi.png",
    desc: "Merekam Momen-Momen Berharga dalam Kehidupan",
    link: "/category/fotografi",
  },
  {
    title: "Video Music",
    img: "assets/kategori-icon/video-musik.png",
    desc: "Seni Visual dan Audio",
    link: "/category/video-musik",
  },
  {
    title: "Keterampilan",
    img: "assets/kategori-icon/keterampilan.png",
    desc: "Kerajinan Tangan yang Unik",
    link: "/category/keterampilan",
  },
  {
    title: "Kuliner",
    img: "assets/kategori-icon/kuliner.png",
    desc: "Menciptakan Pengalaman Rasa yang Tak Terlupakan",
    link: "/category/kuliner",
  },
  {
    title: "Mode Busana",
    img: "assets/kategori-icon/mode-busana.png",
    desc: "Kreativitas dan Inovasi dalam Desain Pakaian",
    link: "/category/mode-busana",
  },
  {
    title: "Penerbitan",
    img: "assets/kategori-icon/penerbitan.png",
    desc: "Karya Tulis yang Dipublikasikan",
    link: "/category/penerbitan",
  },
  {
    title: "Film & Animasi",
    img: "assets/kategori-icon/film-animasi.png",
    desc: "Menciptakan Dunia Imajinatif yang Memikat dan Menghibur",
    link: "/category/film-animasi",
  },
  {
    title: "Periklanan",
    img: "assets/kategori-icon/periklanan.png",
    desc: "Strategi Kreatif dan Komunikasi yang Kuat",
    link: "/category/periklanan",
  },
  {
    title: "Permainan",
    img: "assets/kategori-icon/permainan.png",
    desc: "Dunia Virtual yang Menghibur dan Menginspirasi Pemainnya",
    link: "/category/permainan",
  },
  {
    title: "TV & Radio",
    img: "assets/kategori-icon/tv-radio.png",
    desc: "Memperkaya Pengetahuan dan Hiburan para Pemirsa",
    link: "/category/tv-radio",
  },
  {
    title: "Seni Rupa",
    img: "assets/kategori-icon/seni-rupa.png",
    desc: "Menghadirkan Dunia yang Indah",
    link: "/category/seni-rupa",
  },
  {
    title: "Seni Pertunjukan",
    img: "assets/kategori-icon/seni-pertunjukan.png",
    desc: "Ekspresi Artistik yang Memukau dan Menginspirasi melalui Penampilan Langsung",
    link: "/category/seni-pertunjukan",
  },
];

const Kategorilist = () => {
  return (
    <section className="kategorilistsec">
      <h1 id="kategoriofwork">- Kategori -</h1>
      <div className="row row-cols-1 row-cols-md-3 justify-content-center">
        {kategori.map((item, index) => (
          <div className="col mb-4" key={index}>
            <Kategoricard
              title={item.title}
              img={item.img}
              desc={item.desc}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Kategorilist;
