import Navigationbar from '../component/Navigationbar';
import Footer from '../component/Footer';
import Form from 'react-bootstrap/Form';
import '../css/notifikasi.css';
import Notificationbar from '../component/element/Notificationbar';

export default function Notifikasi() {
    // array of 10 dummy notifications
    const notifications = [
        { id: 1, title: "Notification 1", content: "Content for notification 1", read: 0, time: "26 Mei" },
        { id: 2, title: "Notification 2", content: "Content for notification 2", read: 1, time: "26 Mei" },
        { id: 3, title: "Notification 3", content: "Content for notification 3", read: 0, time: "26 Mei" },
        { id: 4, title: "Notification 4", content: "Content for notification 4", read: 1, time: "26 Mei" },
        { id: 5, title: "Notification 5", content: "Content for notification 5", read: 0, time: "26 Mei" },
        { id: 6, title: "Notification 6", content: "Content for notification 6", read: 1, time: "26 Mei" },
        { id: 7, title: "Notification 7", content: "Content for notification 7", read: 0, time: "26 Mei" },
        { id: 8, title: "Notification 8", content: "Content for notification 8", read: 1, time: "26 Mei" },
        { id: 9, title: "Notification 9", content: "Content for notification 9", read: 0, time: "26 Mei" },
        { id: 10, title: "Notification 10", content: "Content for notification 10", read: 1, time: "26 Mei" }
    ];

    return (
        <>
            <Navigationbar log={1} navn={3} />
            <section className='notifsec'>
                <h1>Notifikasi</h1>
                <div className="input-container">
                    <span className="material-symbols-outlined search-icon">
                        search
                    </span>
                    <Form.Control id='notifsearch' type="text" placeholder="Telusuri notifikasi" />
                </div>
                <a className='readal'>Sudah dibaca</a>
                <div className='notifcontainer'>
                    {notifications.map(notification => (
                        <div key={notification.id}>
                            <Notificationbar 
                                title={notification.title} 
                                content={notification.content} 
                                read={notification.read} 
                                time={notification.time} 
                            />
                            <hr className='notifdivider' />
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}
