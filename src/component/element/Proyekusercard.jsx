import '../../css/minorel.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Proyekusercard({ imgSrc, name, pr1 = 0, pr2 = 0, pr3 = 0, pr4 = 0, notifCount,onClickprog }) {
    return (
        <div style={{width:'100%',height:'120px',display:'flex',flexDirection:'column',gap:'10px',maxWidth:'390px'}}>
            <div className='d-flex justify-content-between w-100'>
                <div className='d-flex align-items-center gap-4'>
                    <img style={{width:'50px',height:'50px'}} src={imgSrc} />
                    <h4>{name}</h4>
                </div>
                <div className={`justify-content-center align-items-center d-flex`} style={{ width: '25px' }}>
                        {notifCount > 0 ? <div style={{position:'relative'}}><img style={{ width: '25px' }} src='/assets/Bell.png'/><span className='notifcountnum' style={{width:'15px',height:'15px',fontSize:'10px'}}>{notifCount}</span></div> : <img style={{ width: '25px' }} src='/assets/Bellinactive.png'/>}
                </div>
            </div>
            <div style={{height:'10px'}} className='d-flex justify-content-between w-100 gap-1'>
                <div className='d-flex flex-column justify-content-between align-items-center' style={{ width: '10%' }}>
                    <div style={{ width: '100%', borderRadius: '40px', overflow: 'hidden' }}>
                        <ProgressBar now={pr1} />
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-between align-items-center' style={{ width: '60%' }}>
                    <div style={{ width: '100%', borderRadius: '40px', overflow: 'hidden' }}>
                        <ProgressBar now={pr2} />
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-between align-items-center' style={{ width: '10%' }}>
                    <div style={{ width: '100%', borderRadius: '40px', overflow: 'hidden' }}>
                        <ProgressBar now={pr3} />
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-between align-items-center' style={{ width: '10%' }}>
                    <div style={{ width: '100%', borderRadius: '40px', overflow: 'hidden' }}>
                        <ProgressBar now={pr4} />
                    </div>
                </div>
            </div>
            <button onClick={onClickprog} style={{border:'none',width:'125px',height:'23px',fontSize:'12px',fontWeight:'bold'}}>Lihat Kemajuan</button>
        </div>
    );
}