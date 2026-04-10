import { Row, Col } from 'react-bootstrap';
import Subject from '../components/Subject';
import axios from 'axios';
import { useEffect, useState } from 'react';

const HomeScreen = () => {
  const [subjects,setSubjects]=useState([]);
  useEffect(()=>{
    const fetchSubjects = async()=>{
      const {data} = await axios.get('/api/subjects');
      setSubjects(data);
    };
    fetchSubjects();
  },[]);
  return (
    <>
      <h1>Latest Subjects</h1>
      <Row>
        {subjects.map((subject) => (
          <Col key={subject._id} sm={12} md={6}  lg={3} >
            <Subject subject={subject} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;