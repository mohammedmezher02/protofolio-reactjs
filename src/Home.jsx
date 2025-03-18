import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import "./App.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./App.css"
import { Pagination, FreeMode } from 'swiper/modules';


export const Home = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get("data.json")
      .then(res => {
        setProjects(res.data.projects)
        console.log(res.data.projects)
      })

  }, [])

  return (
    <section className="bannar">
      <Container>
        <Row>
          <Col lg={6} md={7} sm={12} className="bannartext wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
            <p>WEB DESIGN <span>//</span> WEBFLOW DEVELOPMENT <span>//</span> SEO</p>
            <h1>Aisha Tarek Portfolio .</h1>
            <h5>We build marketing websites that help you sell on autopilot.</h5>
            {/* <HashLink to="/#contact"><button>Let's talk</button></HashLink> */}
          </Col>
          <Col lg={6} md={5} sm={12} className="bannarimgs wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
            <img src="images/623503637e979197919c6c03_Topology-1 (1).svg" alt="" className="waves" />
            <img src="images/623a183aa76fb537cbc5dc0e_Group 8-p-500.png" alt="" className="laptop" />
            <div className="imgbox gimg">
              <img src="images/62324067d42bfc263ee547ff_image 4 (Traced).svg" alt="" />
            </div>
            <div className="imgbox uimg">
              <img src="images/6232406724bd9b36622aed48_image 3 (Traced).svg" alt="" />
            </div>
            <div className="imgbox wimg">
              <img src="images/623240674411e07510215b6f_image 2 (Traced).svg" alt="" />
            </div>
          </Col>
        </Row>
      </Container>

      <section className="homesec2">
        <Container>
          <Row>
            <Col md={6} sm={12} className="wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
              <div className="secimgs">
                <img src="images/623506fac432155edb494f48_Topology-2 (1).svg" alt="" className="waves" />
                <img src="images/6297dd8a74746c61110b1aaa_undraw_team_collaboration_re_ow29 1 (2).svg" alt="" className="people" />
              </div>
            </Col>
            <Col md={6} sm={12} className="sec2text wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
              <button>the dream</button>
              <p>Imagine having your sales team on the job 24/7, interacting with an endless stream of ready-to-buy visitors.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="homesec3" id="latest">
        <div className="sectext wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
          <h3>Latest builds.</h3>
          <Link to="/Projects">View Projects</Link>
        </div>
        <Swiper 
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s"
        >
          {projects.slice(1, 6).map((project) => (
            <SwiperSlide  key={project.id}>
              <a href={project.link} target="_blank">
              <img src={project.photo} alt="" />
              </a>
              </SwiperSlide>
          ))}
        </Swiper>

      </section>
    </section>
  )
}
