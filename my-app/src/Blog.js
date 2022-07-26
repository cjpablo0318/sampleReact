import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function BlogKineme(props) {
  return (
    <Card className="mb-5">
      <Card.Img variant="top" src= {props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.text}
        </Card.Text>
      </Card.Body>
     
    </Card>
  );
}

export default BlogKineme;