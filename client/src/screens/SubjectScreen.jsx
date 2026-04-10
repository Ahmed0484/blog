import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';
import { useEffect, useState } from 'react';

const SubjectScreen = () => {
  const { id: subjectId } = useParams();
  const [subject,setSubject]=useState({});
  useEffect(()=>{
    const fetchSubject = async()=>{
      const {data} = await axios.get(`/api/subjects/${subjectId}`);
      setSubject(data);
    };
    fetchSubject();
  },[subjectId]);

  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <Row>
        <Col md={2}>
       </Col>
        <Col md={6}>
          <ListGroup variant='flush'>
            <ListGroup.Item><h6 className='text-success'>{subject.category}</h6></ListGroup.Item>
            <ListGroup.Item>
              <h3>{subject.title}</h3>
            </ListGroup.Item>
            <ListGroup.Item className='text-success'>Writer: {subject.writer}</ListGroup.Item>
            <ListGroup.Item>{subject.content}</ListGroup.Item>
          </ListGroup>
        </Col>
       <Col md={4}>
       <Rating
                value={subject.rating}
                text={`${subject.numReviews} reviews`}
              />
        <Image src={subject.image} alt={subject.title} className='border rounded' fluid />
         </Col>
      </Row>
    </>
  );
};

export default SubjectScreen;