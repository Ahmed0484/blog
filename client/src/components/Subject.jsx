import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Subject = ({ subject }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Card.Text as='h5' className='bg-success text-center'>{subject.category}</Card.Text>
            <Link to={`/subject/${subject._id}`}>
                <Card.Img src={subject.image} />
            </Link>
            <hr />
            <Card.Body>
                <Link to={`/subject/${subject._id}`}>
                    <Card.Title as='div' className='subject-title'>
                        <strong>{subject.title}</strong>
                    </Card.Title>
                </Link>
                <Card.Text>
                    <Rating
                        value={subject.rating}
                        text={subject.numReviews}
                    />
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Subject;