import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from '../../IMG/logoPLN.png'
import './style.css'


const NavigationBar = () => {
  return (
    <Navbar
      style={{ backgroundColor: "var(--white)" }}
      fixed="top"
      className="border shadow-sm"
      variant="light"
      expand="lg"
    >
      <Container>
        <Navbar.Brand id="logo">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle id="buttontogel" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gapNav">
            <Nav.Link href="/">Beranda</Nav.Link>
            <Nav.Link href="/">Kinerja</Nav.Link>
            <Nav.Link href="/">Proses Bisnis</Nav.Link>
            <Nav.Link href="/">Kualitas Power</Nav.Link>
            <Nav.Link href="/">Pemeliharaan</Nav.Link>
            <Nav.Link href="/">Support</Nav.Link>
            <Nav.Link href="/">Konsultan</Nav.Link>
          </Nav>
          <Nav className="ms-auto gapNav">
            <Nav.Link id="daftar" href="/daftar">
              Daftar
            </Nav.Link>
            <Nav.Link id="loginBtn" href="/login">
              Masuk
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
