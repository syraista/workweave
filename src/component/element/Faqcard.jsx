import Card from 'react-bootstrap/Card';
import '../../css/minorel.css'

export default function Faqcard({title,content,link}) {
    return (
        <Card className='faqcrdmn col'>
            <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Text className="faqtitle">{title}</Card.Text>
                <Card.Text className="faqansw">{content}</Card.Text>
                <a className='faqlink' href={link}>Lihat lebih banyak</a>
            </Card.Body>
        </Card>
    );
}