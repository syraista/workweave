import Navigationbar from '../component/Navigationbar';
import Footer from '../component/Footer';
import '../css/faq.css';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import Faqcard from '../component/element/Faqcard';
import Buttonelement from '../component/element/Buttonelement';

export default function Faq() {
  return (
    <>
      <Navigationbar log={1} navn={4} />

      <section className="faqsect">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="bannertextfaq">
            <h1>
              <span>Bagaimana</span> kami dapat
              <br /> membantu Anda ?
            </h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <img src="assets/faqbn.png" />
        </div>
        <div>
          <div className="d-flex justify-content-between searchsec">
            <p>Kami Punya Jawaban Untuk Pertanyaan Anda.</p>
            <div className="input-containerfaq">
              <span className="material-symbols-outlined search-icon">search</span>
              <Form.Control id="faqsearch" type="text" placeholder="Cari Pertanyaan" />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-between faqcontain">
            <Faqcard
              title={'Bagaimana cara mencari pekerjaan freelance di platform ini?'}
              content={
                'Anda dapat mencari pekerjaan freelance dengan mendaftar sebagai freelancer dan menelusuri berbagai proyek yang sesuai dengan keahlian dan minat Anda. Setelah menemukan proyek yang cocok, Anda dapat mengajukan penawaran atau menghubungi klien langsung.'
              }
              link={'#'}
            />
            <Faqcard
              title={'Apa manfaat menjadi freelancer?'}
              content={
                'Sebagai freelancer, Anda memiliki fleksibilitas untuk menentukan jadwal kerja Anda sendiri, memilih proyek yang ingin Anda kerjakan, dan menentukan tarif Anda sendiri. Selain itu, Anda dapat memperluas jaringan profesional Anda dan memperoleh pengalaman baru dari berbagai proyek.'
              }
              link={'#'}
            />
            <Faqcard
              title={'Bagaimana cara memberikan pekerjaan kepada freelancer di platform ini?'}
              content={
                'Untuk memberikan pekerjaan kepada freelancer, Anda perlu membuat akun sebagai pemilik proyek, kemudian posting proyek dengan deskripsi yang jelas, anggaran, dan tenggat waktu. Setelah itu, Anda dapat menerima penawaran dari freelancer yang tertarik dan memilih yang paling sesuai dengan kebutuhan Anda.'
              }
              link={'#'}
            />
            <Faqcard
              title={'Bagaimana saya bisa memastikan kualitas pekerjaan dari freelancer?'}
              content={
                'Anda dapat memastikan kualitas pekerjaan dari freelancer dengan memeriksa portofolio mereka, membaca ulasan dari klien sebelumnya, dan melakukan wawancara atau uji coba untuk mengevaluasi kemampuan mereka sebelum memulai proyek.'
              }
              link={'#'}
            />
            <Faqcard
              title={'Bagaimana sistem pembayaran bekerja di platform ini?'}
              content={'Pembayaran biasanya dilakukan langsung oleh klien kepada freelancer setelah pekerjaan selesai dan disetujui oleh kedua belah pihak, sesuai dengan kesepakatan yang dibuat sebelumnya.'}
              link={'#'}
            />
            <Faqcard
              title={'Bagaimana cara mencari pekerjaan freelance di platform ini?'}
              content={
                'Pendaftaran dan penelusuran proyek biasanya gratis untuk freelancer. Namun, ada kemungkinan dikenakan biaya atau komisi untuk setiap transaksi atau proyek yang berhasil diselesaikan, dan juga biaya setiap upload proyek, yang akan dijelaskan secara rinci pada saat pendaftaran.'
              }
              link={'#'}
            />
          </div>
          <div className="d-flex w-100 justify-content-center">
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
          <div className="d-flex justify-content-end w-100 mb-5">
            <Buttonelement arrow={true} content={'Selanjutnya'} br={'5px'} width={'210px'} height={'55px'} fs={'20px'} fw={'Bold'} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
