import '../../css/minorel.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function getColor(progress) {
    if (progress <= 25) {
        return('#fa0202');
    }; 
    if (progress <= 50) {
        return('#f6de06');
    }; 
    if (progress <= 75) {
        return('#c4c801');
    }; 
    if (progress <= 90) {
        return('#01c814');
    }; 
    if (progress <= 100) {
        return('#02b1bc');
    }; 
}

export default function Proyekcard({ onClick, imgSrc, title, memberCount, progress = 0, type = 'regular', notifCount=0, accepted=0,aconClick}) {
    return (
        <div onClick={type === 'regular'||type === 'ownerappr' ? onClick : undefined} style={type === 'regular'||type === 'ownerappr' ? {cursor:'pointer'} : {cursor:'default'}}  className='proyekcrdmain'>
            <div style={{ gap: '20px' }} className='d-flex align-items-center'>
                <img src={`/assets/kategori-icon/${imgSrc}.png`} alt='image' />
                <hr style={{ width: '2px', height: '100%', backgroundColor: 'grey', margin: '0' }} />
                <h4 style={{ margin: '0', fontSize: '30px', fontWeight: 'bold' }}>{title}</h4>
            </div>
            <div style={{ gap: '0px' }} className={`align-items-center h-100 ${type === 'regular' ? 'd-flex' : 'd-none'}`}>
                <div className='d-flex h-100 align-items-center'>
                    <hr style={{ width: '2px', height: '100%', backgroundColor: 'grey', margin: '0px 30px' }} />
                    <span style={{ color: 'gray', fontSize: '50px' }} className="material-symbols-outlined">
                        person
                    </span>
                    <p style={{ margin: '0', fontSize: '32px', color: 'gray' }}>{memberCount}</p>
                    <hr style={{ width: '2px', height: '100%', backgroundColor: 'grey', margin: '0 30px' }} />
                </div>
                <div className={`justify-content-center d-flex`} style={{ width: '63px' }}>
                    <CircularProgressbar
                        value={progress}
                        text={`${progress}%`}
                        styles={buildStyles({
                            rotation: 0,
                            textSize: '26px',
                            pathColor: getColor(progress),
                            textColor: getColor(progress),
                            trailColor: '#ececec',
                            backgroundColor: '#3e98c7',
                        })} />
                </div>
                <div className='d-flex h-100 align-items-center'>
                    <hr style={{ width: '2px', height: '100%', backgroundColor: 'grey', margin: '0 30px' }} />
                    <span style={{ fontSize: '50px', color: 'gray', marginRight: '20px' }} className="material-symbols-outlined">
                        more_vert
                    </span>
                </div>
            </div>
            <div style={{ gap: '0px' }} className={`align-items-center h-100 ${type === 'ownerappr' ? 'd-flex' : 'd-none'}`}>
                <div className='d-flex h-100 align-items-center'>
                    <hr style={{ width: '2px', height: '100%', backgroundColor: 'grey', margin: '0px 30px' }} />
                    <span style={{ color: 'gray', fontSize: '50px' }} className="material-symbols-outlined">
                        person
                    </span>
                    <p style={{ margin: '0', fontSize: '32px', color: 'gray' }}>{memberCount}</p>
                    <hr style={{ width: '2px', height: '100%', backgroundColor: 'grey', margin: '0 30px' }} />
                </div>
                <div className={`justify-content-center d-flex`} style={{ width: '63px' }}>
                        {notifCount > 0 ? <div style={{position:'relative'}}><img src='/assets/Bell.png'/><span className='notifcountnum'>{notifCount}</span></div> : <img src='/assets/Bellinactive.png'/>}
                </div>
                <div className='d-flex h-100 align-items-center'>
                    <hr style={{ width: '2px', height: '100%', backgroundColor: 'grey', margin: '0 30px' }} />
                    <span style={{ fontSize: '50px', color: 'gray', marginRight: '20px' }} className="material-symbols-outlined">
                        more_vert
                    </span>
                </div>
            </div>
            <div style={{ gap: '0px' }} className={`align-items-center h-100 ${type === 'workerappr' ? 'd-flex' : 'd-none'}`}>
                <div className='d-flex h-100 align-items-center'>
                    <hr style={{ width: '2px', height: '100%', backgroundColor: 'grey', margin: '0px 30px' }} />
                    <span style={{ color: 'gray', fontSize: '50px' }} className="material-symbols-outlined">
                        person
                    </span>
                    <p style={{ margin: '0', fontSize: '32px', color: 'gray' }}>{memberCount}</p>
                    <hr style={{ width: '2px', height: '100%', backgroundColor: 'grey', margin: '0 30px' }} />
                </div>
                <div className={`justify-content-center d-flex`} style={{ width: '63px' }}>
                    {accepted === 1 ? <img onClick={aconClick} style={{cursor:'pointer'}} src='/assets/accept.png'/> : <img style={{cursor:'default'}} src='/assets/decline.png'/>}
                </div>
                <div className='d-flex h-100 align-items-center'>
                    <hr style={{ width: '2px', height: '100%', backgroundColor: 'grey', margin: '0 30px' }} />
                        {notifCount > 0 ? <div style={{position:'relative',marginRight: '30px',marginLeft:'5px'}}><img src='/assets/Bell.png'/><span className='notifcountnum'>{notifCount}</span></div> : <img style={{marginRight: '30px',marginLeft:'5px' }} src='/assets/Bellinactive.png'/>}
                </div>
            </div>
        </div>
    );
}

