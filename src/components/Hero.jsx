import { motion } from 'framer-motion';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ProfileCard from './ProfileCard';
import useTypewriter from './useTypewriter';


export default function Hero() {
    const [text] = useTypewriter(["Web Developer", "Software Engineer", "IT Enthusiast"], 80);


    return (
        <section id="home" className="hero-section">
            <div className="container">
                <Row className="align-items-center">
                    <Col md={7} className="mb-4">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <h1 className="display-5">Hello, I'm <span className="neon">Ferry Andika Firmansyah</span></h1>
                            <h3 className="mt-2 typewriter">{text}<span className="cursor">|</span></h3>
                            <p className="lead muted">I build modern, accessible, and delightful interfaces with React. I love clean code and polished UI.</p>
                            <div className="mt-3">
                                <Button href="#projects" className="me-2 btn-neon">See projects</Button>
                                <Button href="#contact" variant="outline-light">Contact me</Button>
                            </div>
                        </motion.div>
                    </Col>


                    <Col md={5} className="d-flex justify-content-center">
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ rotateY: 180 }}>
                            <ProfileCard />
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}