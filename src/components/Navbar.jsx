import {
  Container,
  Navbar as BootstrapNavbar,
  Nav,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { total } = useCart();

  return (
    <BootstrapNavbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="py-3 shadow-sm"
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="fw-bold">
          Pizzería Mamma Mía!
        </BootstrapNavbar.Brand>

        <Nav className="me-auto gap-2">
          <Button as={Link} to="/" variant="outline-light" size="sm">
            🍕 Home
          </Button>

          <Button as={Link} to="/login" variant="outline-light" size="sm">
            🔐 Login
          </Button>

          <Button as={Link} to="/register" variant="outline-light" size="sm">
            🔐 Register
          </Button>

          <Button as={Link} to="/profile" variant="outline-light" size="sm">
            🔓 Profile
          </Button>
        </Nav>

        <Button as={Link} to="/cart" variant="outline-info" size="sm">
          🛒 Total: ${formatPrice(total)}
        </Button>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;