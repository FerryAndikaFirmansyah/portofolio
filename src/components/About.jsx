import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles.css";


const About = () => {
    return (
        <Container id="about" className="about-section py-5">
            <Row className="align-items-center">
                {/* Deskripsi Diri */}
                <Col md={7} className="text-section">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="neon-title mb-4">About Me</h2>
                        <p className="about-text">
                            Saya adalah seorang <b>Web Developer</b> yang bersemangat dalam membangun
                            aplikasi web interaktif dan responsif. Saya memiliki minat tinggi dibidang IT terutama <strong>Fullstack Web Developer</strong> dan <strong>Software Engineer</strong>.
                            <br />
                            Bagi saya, kode bukan hanya
                            tentang logika, tapi juga tentang seni dalam menciptakan pengalaman
                            digital yang menyenangkan.
                        </p>
                    </motion.div>
                </Col>


                {/* Foto 3D Lanyard */}
                <Col md={5} classaName="image-section text-center">
                    <motion.div
                        className="lanyard-card"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ rotateY: 10, rotateX: 10, scale: 1.05 }}
                        whileTap={{ rotateY: -10, rotateX: -10 }}
                        viewport={{ once: true }}
                    >
                        <div className="lanyard-frame">
                            <img
                                src="/assets/profileabout.jpeg"
                                alt="Profile Placeholder"
                                className="lanyard-photo"
                            />
                            <div className="lanyard-string"></div>
                        </div>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};


export default About;