import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarkeme from './Navbar.js'
import Loginform from './Loginform.js'
import BlogKineme from './Blog.js'
function App() {
  return (
<>
  <Navbarkeme />
  <Container>
      <Row className="justify-content-md-center pt-5">
        <Col xs lg="4">
          <Loginform />
        </Col>
        <Col xs lg="8">
          <BlogKineme 
          title="My First Blog Post" 
          img="https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
          text="fullTank"/>
          <BlogKineme
           title="Egg" 
           img="https://images.unsplash.com/photo-1580325103222-1416fd5678b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGVnZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
           text="fullTank"/>
          <BlogKineme 
           title="Sunnyside Up" 
           img="https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" 
           text="fullTank"/>

        </Col>
      </Row>
      
    </Container>
  

</>
 
  );
}

export default App;
