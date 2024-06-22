import Card from 'react-bootstrap/Card';
export default function CatpCard({ title, katpcount, rate, starcount = 5, img, link}) {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const starColor = i < starcount ? "star.svg" : "star_gray.svg";
            stars.push(<img key={i} src={`/assets/${starColor}`} />);
        }
        return stars;
    };

    return (
        <a style={{ textDecoration: 'none' }} href={link}>
        <Card id="catpmain">
            <Card.Img className="catpimg" variant="top" src={img} />
            <Card.Body className='d-flex flex-column justify-content-around gap-2 p-2 catpbd'>
                <div className='d-flex flex-column gap-0'>
                    <Card.Title className="catptitle">{title}</Card.Title>
                    <Card.Text className="catptext">Rating</Card.Text>
                    <div className="d-flex align-items-center gap-2 catprt">
                        <div className="d-flex align-items-center gap-1 catpstarcnt">
                            {renderStars()}
                        </div>
                        {rate}/10
                    </div>
                </div>
                <Card.Text className="catpcount">{katpcount} Project</Card.Text>
            </Card.Body>
        </Card>
        </a>
    );
}


{/* usage <CatpCard
                key={kategori.id}
                title={kategori.title}
                katpcount={kategori.katpcount}
                rate={kategori.rate}
                starcount={kategori.starcount}
                img={kategori.img}
                link={kategori.link}
            /> */}