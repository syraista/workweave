import React from 'react';
import Navigationbar from '../component/Navigationbar';
import BannerApp from '../component/BannerApp';
import KategoriApp from '../component/KategoriApp';
import TentangApp from '../component/TentangApp';
import Footer from '../component/Footer';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import Buttonelement from '../component/element/Buttonelement';

const kategoriapp = [
  {
    id: '1',
    title: 'Database Pengguna dan Penjual',
    img: 'assets/kategori-app/database.png',
    desc: 'Mengembangkan Database Pengguna dan Penjual',
    team: '6 Orang/Tim',
    tawaran: 'Tawaran',
    price: 'Rp 300.000',
    link: '/Aplikasidummy',
    kat: '1',
  },
  { id: '2', title: 'WalletWise', img: 'assets/kategori-app/walletwise.png', desc: 'Aplikasi Mobile Banking untuk Pengelolaan Keuangan', team: '6 Orang/Tim', tawaran: 'Tawaran', price: 'Rp 250.000', link: '#', kat: '1' },
  { id: '3', title: 'CodeCollab', img: 'assets/kategori-app/codecollab.png', desc: 'Platform Kolaborasi Pengembangan Perangkat Lunak', team: '6 Orang/Tim', tawaran: 'Tawaran', price: 'Rp 500.000', link: '#', kat: '1' },
  {
    id: '4',
    title: 'Implementasi UI ke Aplikasi',
    img: 'assets/kategori-app/implementasi.png',
    desc: 'Mengimplementasikan Design UI kek Dalam Bentuk Aplikasi',
    team: '6 Orang/Tim',
    tawaran: 'Tawaran',
    price: 'Rp 700.000',
    link: '#',
    kat: '1',
  },
  { id: '5', title: 'WebDinamis', img: 'assets/kategori-app/webdinamis.png', desc: 'Pembuatan Web Dinamis yang Menarik', team: '6 Orang/Tim', tawaran: 'Tawaran', price: 'Rp 500.000', link: '#', kat: '1' },
  { id: '6', title: 'ExploreWorld', img: 'assets/kategori-app/explore.png', desc: 'Platform Web untuk Insprirasi dan Informasi Perjalanan', team: '6 Orang/Tim', tawaran: 'Tawaran', price: 'Rp 750.000', link: '#', kat: '1' },
  { id: '7', title: 'TrendyThreads', img: 'assets/kategori-app/trendy.png', desc: 'Toko Online Fashion Wanita dengan Pilihan Terbaru', team: '6 Orang/Tim', tawaran: 'Tawaran', price: 'Rp 800.000', link: '#', kat: '1' },
  { id: '8', title: 'CrossDeviceHub', img: 'assets/kategori-app/cross.png', desc: 'Situs Web yang Responsif di Semua Perangkat', team: '6 Orang/Tim', tawaran: 'Tawaran', price: 'Rp 650.000', link: '#', kat: '1' },
  { id: '9', title: 'Implementasi Design Web', img: 'assets/kategori-app/implementasi-web.png', desc: 'Mengimplementasikan Design Web dengan Menarik', team: '6 Orang/Tim', tawaran: 'Tawaran', price: 'Rp 700.000', link: '#', kat: '1' },
];

export default function Aplikasi() {
  return (
    <>
      <Navigationbar log={1} navn={1} />

      <BannerApp />

      <div style={{ backgroundColor: '#F4FAFC', padding: '20px 100px' }} className="d-flex flex-column w-100">
        <div style={{ padding: '20px 50px 50px 26px' }} className="d-flex justify-content-between">
          <div className="d-flex gap-3">
            <div style={{ position: 'relative' }}>
              <Form.Group controlId="selectAnggaran">
                <Form.Control style={{ height: '51px', width: '180px', border: '1px solid #7e7e7e', paddingLeft: '30px', cursor: 'pointer' }} as="select">
                  <option>Pilih Anggaran</option>
                  <option>Anggaran 1</option>
                  <option>Anggaran 2</option>
                  <option>Anggaran 3</option>
                </Form.Control>
              </Form.Group>
              <span className="material-symbols-outlined select-icon" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                keyboard_arrow_down
              </span>
            </div>
            <div style={{ position: 'relative' }}>
              <Form.Group controlId="selectFilterProject">
                <Form.Control style={{ height: '51px', width: '180px', border: '1px solid #7e7e7e', paddingLeft: '30px', cursor: 'pointer' }} as="select">
                  <option>Pilih Filter Project</option>
                  <option>Filter 1</option>
                  <option>Filter 2</option>
                  <option>Filter 3</option>
                </Form.Control>
              </Form.Group>
              <span className="material-symbols-outlined select-icon" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                keyboard_arrow_down
              </span>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <Form.Group controlId="searchProject">
              <Form.Control style={{ height: '51px', width: '233px', border: '1px solid #7e7e7e', paddingLeft: '50px' }} type="text" placeholder="Cari project" />
            </Form.Group>
            <span className="material-symbols-outlined search-icon" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
              search
            </span>
          </div>
        </div>
        <div className="row row-cols-3 w-100">
          {kategoriapp.map((item) => (
            <div key={item.id} className="cols d-flex justify-content-center">
              <KategoriApp title={item.title} img={item.img} desc={item.desc} price={item.price} team={item.team} tawaran={item.tawaran} kat={item.kat} link={item.link} />
            </div>
          ))}
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
            <Pagination.Next />
          </Pagination>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-end w-100 mb-5">
          <Buttonelement arrow={true} content={'Selanjutnya'} br={'5px'} width={'210px'} height={'55px'} fs={'20px'} fw={'Bold'} />
        </div>
      </div>

      <TentangApp />

      <Footer />
    </>
  );
}
