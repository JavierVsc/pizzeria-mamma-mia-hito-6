import { Button, Container, Card } from "react-bootstrap";

const Profile = () => {
  return (
    <Container className="py-5">
      <Card className="profile-card shadow-sm mx-auto">
        <Card.Body>
          <Card.Title className="fs-2 mb-4">Perfil de usuario</Card.Title>

          <Card.Text>
            <strong>Email:</strong> usuario@pizzeriamammamia.cl
          </Card.Text>

          <Button variant="dark">
            Cerrar sesión
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;