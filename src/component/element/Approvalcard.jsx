import '../../css/minorel.css';

export default function Approvalcard({ imgSrc, nama, cvlink, aconClick, dconClick }) {
  return (
    <div className="approvalcrdmain" style={{ userSelect: 'none' }}>
      <div style={{ gap: '20px' }} className="d-flex align-items-center">
        <img src={imgSrc} style={{ width: '57px' }} alt="image" />
        <hr style={{ width: '2px', height: '100%', backgroundColor: 'grey', margin: '0' }} />
        <h4 style={{ margin: '0', fontSize: '25px', fontWeight: 'bold' }}>{nama}</h4>
      </div>
      <div style={{ gap: '0px' }} className="align-items-center h-100 d-flex">
        <div className="d-flex h-100 align-items-center">
          <a
            href={cvlink}
            className="d-flex justify-content-center align-items-center"
            style={{
              margin: '0',
              marginRight: '10px',
              fontSize: '16px',
              color: '#1800ab',
              textDecoration: 'none',
              width: '133px',
              height: '33px',
              backgroundColor: '#edeaff',
              border: '2px solid #4426fb',
              fontWeight: 'bold',
              borderRadius: '8px',
            }}
          >
            Lihat CV
          </a>
        </div>
        <hr style={{ width: '2px', height: '100%', backgroundColor: 'grey', margin: '0px 10px' }} />
        <div onClick={aconClick} className={`justify-content-center d-flex`} style={{ width: '63px', cursor: 'pointer' }}>
          <img src="/assets/accept.png" />
        </div>
        <hr style={{ width: '2px', height: '100%', backgroundColor: 'grey', margin: '0px 10px' }} />
        <div onClick={dconClick} className={`justify-content-center d-flex`} style={{ width: '63px', cursor: 'pointer' }}>
          <img src="/assets/decline.png" />
        </div>
      </div>
    </div>
  );
}
