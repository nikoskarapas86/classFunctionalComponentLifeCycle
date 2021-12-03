import Card from "react-bootstrap/Card";

export default function CardItem(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{props.name}</Card.Text>
      </Card.Body>
    </Card>
  );
}
