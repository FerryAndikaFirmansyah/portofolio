import { motion } from 'framer-motion';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';


const projects = [
    { title: 'Pet Shop Zaman Now', desc: 'Aplikasi Petshop dengan React, Postgree, Nodejs', link: 'https://petshopzn-fe.vercel.app/' },
    { title: 'Interactive Portfolio (React + NextJS)', desc: 'Portfolio interaktif dengan dark mode dan animasi', link: 'https://ferryandikafirmansyah.github.io/portofolio/' },
    { title: 'Santeen POS', desc: 'Aplikasi pos kasir sederhana', link: 'https://github.com/FerryAndikaFirmansyah/pos-kasir' },
    { title: 'SamudraGateLogistics', desc: 'Company Profile', link: 'https://companyprofile-samudragatelogistics.netlify.app' },
];


export default function Projects() {
    return (
        <section id="projects" className="my-5">
            <h2 className="neon">Projects</h2>
            <Row>
                {projects.map((p, i) => (
                    <Col md={4} key={i} className="mb-3">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 * i }}>
                            <Card className="project-card">
                                <Card.Body>
                                    <Card.Title>{p.title}</Card.Title>
                                    <Card.Text className="muted small">{p.desc}</Card.Text>
                                    <Button variant="light" size="sm" className="btn-neon-outline" href={p.link}>View</Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </section>
    );
}
