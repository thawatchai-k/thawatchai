import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardcomponent({ image, title, description, author, publishing, price }) {
  return (
    <Card style={{ width: '20rem', height: 'auto' ,border: 'solid black 2px' }}>
      <Card.Img
        variant="top"
        src={`/assets/images/${image}`} // Dynamically setting the image
        style={{ width: '20rem', height: 'auto', objectFit: 'cover'}}
        alt="Card image"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text><strong>Author:</strong> {author}</Card.Text>
        <Card.Text><strong>Publishing:</strong> {publishing}</Card.Text>
        <Card.Text><strong>Price:</strong> {price}</Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}



export default Cardcomponent;
