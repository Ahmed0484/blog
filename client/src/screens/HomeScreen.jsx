import { Row, Col } from 'react-bootstrap';
import subjects from '../subjects';
import Subject from '../components/Subject';

const HomeScreen = () => {
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