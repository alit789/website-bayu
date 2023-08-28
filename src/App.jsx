import React from 'react'
import './App.css'
import Navbar from "./Components/Navbar/NavigationBar"
import './style.css'
import Hero from "./IMG/hero.png"
import Work from "./IMG/orgwork.png"
import CardSc from "./Components/cardSC/CardSc"
import Footerku from "./Components/Footer/Footer"
import Beban from './IMG/bebanReal.png'
import GrafikBeban from "./IMG/grafikBeban.png"
import GrafikJumlah from "./IMG/grafikJumlah.png"
import { Col, Container, Row } from 'react-bootstrap'

const App = () => {
  return (
    <section id='Root'>
      {/* Navbar */}
      <Navbar />
      {/* End Navbar */}

      {/* Hero Section */}
      <Container>
        <section id='HeroSection'>
          <Row>
            <Col>
              <img width={"100%"} src={Hero} alt="" />
            </Col>
          </Row>
        </section>
        {/* End Hero Section */}

        {/* Grafik Beban Puncak  */}
        <Row className='py-5'>
          <div className="ScTitle text-center">
            <h2>Grafik Beban Puncak</h2>
            <p>Link Shorcut Supaya Lebih Cepat</p>
          </div>
          <Col xl={6} className='d-flex justify-content-center mt-3'>
            <img src={Beban} width={"70%"} alt="" />
          </Col>
          <Col xl={6} className='d-flex justify-content-center mt-3'>
            <img className='shadow' src={GrafikBeban} width={"90%"} alt="" />
          </Col>
        </Row>
        {/* END Grafik Beban Puncak  */}

        {/* Grafik Jumlah Gangguan */}
        <Row className='py-5'>
          <div className="ScTitle text-center">
            <h2>Grafik Jumlah Gangguan</h2>
            <p>Link Shorcut Supaya Lebih Cepat</p>
          </div>
          <Col className='d-flex justify-content-center mt-3'>
            <img className='shadow' src={GrafikJumlah} width={"100%"} alt="" />
          </Col>
        </Row>
        {/* End Grafik Jumlah Gangguan */}


        {/* shorcut */}
        <section id='ScSection'>
          <Row className='py-5'>
            <div className="ScTitle text-center">
              <h2>Link Shortcut</h2>
              <p>Link Shorcut Supaya Lebih Cepat</p>
            </div>
            <Col className=' mt-3 d-flex justify-content-center' xl={3} md={6}>
              <CardSc Title="Website PLN" />
            </Col>
            <Col className=' mt-3 d-flex justify-content-center' xl={3} md={6}>
              <CardSc Title="Dashboard Maintenance" />
            </Col>
            <Col className=' mt-3 d-flex justify-content-center' xl={3} md={6}>
              <CardSc Title="Mobile Maintenance Dashboard" />
            </Col>
            <Col className=' mt-3 d-flex justify-content-center' xl={3} md={6}>
              <CardSc Title="Peta Padam Bali" />
            </Col>
            <Col className=' mt-3 d-flex justify-content-center' xl={3} md={6}>
              <CardSc Title="SCADA Web" />
            </Col>
            <Col className=' mt-3 d-flex justify-content-center' xl={3} md={6}>
              <CardSc Title="Sensor SAW GI" />
            </Col>
            <Col className=' mt-3 d-flex justify-content-center' xl={3} md={6}>
              <CardSc Title="Dashboard System Bali" />
            </Col>
            <Col className=' mt-3 d-flex justify-content-center' xl={3} md={6}>
              <CardSc Title="HOEDA" />
            </Col>
          </Row>
        </section>
        {/* End shorcut */}

        {/* WORK */}
        <section id='WorkSection'>
          <Row className='py-5'>
            <div className="ScTitle text-center">
              <h2>Work Order</h2>
              <p>Link Shorcut Supaya Lebih Cepat</p>
            </div>
            <Col xl={5}>
              <img width={"100%"} src={Work} alt="" />
            </Col>
            <Col xl={7} className='d-flex align-items-center'>
              <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nulla sit quia aspernatur dolores neque obcaecati iste magnam pariatur ad repellat voluptate temporibus ipsam quaerat, repellendus ea est voluptatem animi!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam reiciendis atque quo optio obcaecati vero odio fuga facilis saepe maiores possimus, corporis, quas ducimus commodi quod aspernatur libero rerum.</p>
                <br />
                <button className='btn btn-primary'>Kunjungi Halaman Work Order</button>
              </div>
            </Col>
          </Row>
        </section>
        {/* END WORK */}

      </Container>
      <Footerku />
    </section >
  )
}

export default App