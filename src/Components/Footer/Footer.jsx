import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer" className="border mt-5">
      <Container className="mt-5">
        <Row className="footer">
          <Col
            style={{ textAlign: "justify", paddingTop: "20px" }}
            xl={5}
            md={12}
          >
            <h4>
              <span style={{ color: "var(--blue)", fontWeight: "500" }}>
                Perusahaan Listrik
              </span>
              <span> Negara ( PLN )</span>
            </h4>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              officia, officiis incidunt odio aspernatur beatae repellendus
              dolores quis nemo sunt eos eius similique cumque, possimus impedit
              adipisci consequuntur, accusamus nobis?
            </p>
          </Col>
          <Col
            style={{ paddingTop: "20px" }}
            xl={{span:3 , offset:1}}
            md={12}
          >
            <h5>Fitur</h5>
            <a href=""><p className="mt-4">Beranda</p></a>
            <a href=""><p>Kinerja</p></a>
            <a href=""><p>Proses Bisnis</p></a>
            <a href=""><p>Kualitas Power</p></a>
            <a href=""><p>Pemeliharaan</p></a>
            <a href=""><p>Support</p></a>
            <a href=""><p>Konsultan</p></a>
          </Col>
          <Col
            style={{ paddingTop: "20px" }}
            xl={3}
            md={12}
          >
            <h5>Kontak Kami</h5>
            <a href=""><p className="mt-4">Profile Pegawai</p></a>
            <a href=""><p>Web Mail</p></a>
            <a href=""><p>Kontak</p></a>
            <a href=""><p>Bantuan</p></a>
            <a href=""><p>User Guide</p></a>
            <a href=""><p>FAQ</p></a>
            <a href=""><p>Visi dan Misi</p></a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
