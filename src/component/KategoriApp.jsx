import Card from 'react-bootstrap/Card';

const KategoriApp = ({ title, img, desc, price, team, kat, link }) => {
  return (
    <a style={{ textDecoration: 'none' }} href={link}>
      <Card style={{ width: '364.55px', height: '391px', borderRadius: '19.24px', marginBottom: '50px', boxShadow: '0px 0px 6.25px 0px rgba(0,0,0,0.25)', overflow: 'hidden' }}>
        <Card.Img style={{ height: '244.31px' }} variant="top" src={img} alt={title} />
        <Card.Body className="d-flex gap-2">
          <img style={{ width: '19.24px', height: '19.24px', marginTop: '2px' }} src={`/assets/kategori-icon/kat-${kat}.png`} />
          <div className="d-flex flex-column w-100">
            <h3 style={{ fontSize: '19.24px', fontWeight: 'bold' }}>{title}</h3>
            <p style={{ fontSize: '10.58px', marginBottom: '5px' }}>{desc}</p>
            <div className="d-flex">
              <span style={{ fontSize: '16px', color: '#aaaaaa' }} className="material-symbols-outlined">
                person
              </span>
              <p style={{ fontSize: '10.58px', color: '#aaaaaa', marginBottom: '0' }}>{team}</p>
            </div>
            <div className="d-flex flex-column align-items-end">
              <p style={{ marginBottom: '0', fontSize: '14.43px', color: '#aaaaaa' }}>Tawaran</p>
              <p style={{ marginBottom: '0', fontSize: '14.43px', color: '#19a7ce' }}>{price}</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </a>
  );
};

export default KategoriApp;
