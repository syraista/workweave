import '../css/kategorilisthome.css'
import Kategoricard from './element/kategoricard';

const kategori = [
  {'title':'Aplikasi','img':'assets/kategori-icon/kat-1.png','desc':'Aplikasi Web maupun Mobile','link':'#'},
  {'title':'Arsitektur','img':'assets/kategori-icon/kat-2.png','desc':'Desain Rumah yang Inovatif','link':'#'},
  {'title':'Desain Grafis','img':'assets/kategori-icon/kat-3.png','desc':'Karya Seni Digital','link':'#'},
  {'title':'Desain Produk','img':'assets/kategori-icon/kat-4.png','desc':'Solusi yang Estetis dan Fungsional','link':'#'},
  {'title':'Desain Interior','img':'assets/kategori-icon/kat-5.png','desc':'Menciptakan Ruang yang Memikat dan Berfungsional','link':'#'},
  {'title':'Fotografi','img':'assets/kategori-icon/kat-6.png','desc':'Merekam Momen-Momen Berharga dalam Kehidupan','link':'#'},
  {'title':'Video Music','img':'assets/kategori-icon/kat-7.png','desc':'Seni Visual dan Audio','link':'#'},
  {'title':'Keterampilan','img':'assets/kategori-icon/kat-8.png','desc':'Kerajinan Tangan yang Unik','link':'#'},
  {'title':'Kuliner','img':'assets/kategori-icon/kat-9.png','desc':'Menciptakan Pengalaman Rasa yang Tak Terlupakan','link':'#'},
  {'title':'Mode Busana','img':'assets/kategori-icon/kat-10.png','desc':'Kreativitas dan Inovasi dalam Desain Pakaian','link':'#'},
  {'title':'Penerbitan','img':'assets/kategori-icon/kat-11.png','desc':'Karya Tulis yang Dipublikasikan','link':'#'},
  {'title':'Film & Animasi','img':'assets/kategori-icon/kat-12.png','desc':'Menciptakan Dunia Imajinatif yang Memikat dan Menghibur','link':'#'},
  {'title':'Periklanan','img':'assets/kategori-icon/kat-13.png','desc':'Strategi Kreatif dan Komunikasi yang Kuat','link':'#'},
  {'title':'Permainan','img':'assets/kategori-icon/kat-14.png','desc':'Dunia Virtual yang Menghibur dan Menginspirasi Pemainnya','link':'#'},
  {'title':'TV & Radio','img':'assets/kategori-icon/kat-15.png','desc':'Memperkaya Pengetahuan dan Hiburan para Pemirsa','link':'#'},
  {'title':'Seni Rupa','img':'assets/kategori-icon/kat-16.png','desc':'Menghadirkan Dunia yang Indah','link':'#'},
  {'title':'Seni Pertunjukan','img':'assets/kategori-icon/kat-17.png','desc':'Ekspresi Artistik yang Memukau dan Menginspirasi melalui Penampilan Langsung','link':'#'},
];

const Kategorilist = () => {
  return (
    <section className="kategorilistsec">
      <h1>- Kategori -</h1>
      <div className="row row-cols-1 row-cols-md-3 justify-content-center">
        {kategori.map((item, index) => (
          <div className='col mb-4' key={index}>
            <Kategoricard title={item.title} img={item.img} desc={item.desc} link={item.link} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Kategorilist;
