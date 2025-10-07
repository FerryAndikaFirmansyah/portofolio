import { motion } from 'framer-motion';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';


const projects = [
    { title: 'Inventory Web With Sequelize Postgree', desc: 'Web Inventory menggunakan Sequelize, Postgree, Nodejs', link: '#' },
    { title: 'Interactive Portfolio (React)', desc: 'Portfolio interaktif dengan dark mode dan animasi', link: '#' },
    { title: 'Sistem Penilaian Siswa', desc: 'Aplikasi pengelolaan nilai siswa dengan hak akses guru/admin', link: '#' }
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