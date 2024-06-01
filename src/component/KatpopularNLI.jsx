import { useRef } from 'react';
import '../css/katpopularnli.css';
import CatpCard from '../component/element/CatpCard';

const popularcat_dummy = [
    { 'id': 1, 'title': 'Graphic Designer', 'katpcount': 983, 'rate': '10', 'starcount': 5, 'img': './assets/kategori/graphic-designer.png', 'link': '#' },
    { 'id': 2, 'title': 'Web Developer', 'katpcount': 744, 'rate': '9,7', 'starcount': 5, 'img': './assets/kategori/web-developer.png', 'link': '#' },
    { 'id': 3, 'title': 'Illustrator', 'katpcount': 707, 'rate': '8', 'starcount': 4, 'img': './assets/kategori/illustrator.png', 'link': '#' },
    { 'id': 4, 'title': 'Video Music', 'katpcount': 687, 'rate': '9,6', 'starcount': 5, 'img': './assets/kategori/videomusic.png', 'link': '#' },
    { 'id': 5, 'title': 'Graphic Designer', 'katpcount': 983, 'rate': '10', 'starcount': 5, 'img': './assets/kategori/graphic-designer.png', 'link': '#' }
];

export default function KatpopularNLI() {
    const katboxRef = useRef(null);

    const scrollLeft = () => {
        if (katboxRef.current) {
            katboxRef.current.scrollLeft -= 353.5;
        }
    };

    const scrollRight = () => {
        if (katboxRef.current) {
            katboxRef.current.scrollLeft += 353.5; 
        }
    };

    const renderKategori = () => {
        return popularcat_dummy.map(kategori => (
            <CatpCard
                key={kategori.id}
                title={kategori.title}
                katpcount={kategori.katpcount}
                rate={kategori.rate}
                starcount={kategori.starcount}
                img={kategori.img}
                link={kategori.link}
            />
        ));
    };

    return (
        <section className='katpopularmain'>
            <hr className="katdivider"></hr>
            <p className='titlekat'><span>kategori</span> Terpopuler</p>
            <div className='w-100 katcontain'>
                <button className="arrow-button left" onClick={scrollLeft}>
                    <span className="material-symbols-outlined arric lefti">arrow_back_ios</span>
                </button>
                <div className='d-flex katbox' ref={katboxRef}>
                    {renderKategori()}
                </div>
                <button className="arrow-button right" onClick={scrollRight}>
                    <span className="material-symbols-outlined arric righti">arrow_forward_ios</span>
                </button>
            </div>
        </section>
    );
}
