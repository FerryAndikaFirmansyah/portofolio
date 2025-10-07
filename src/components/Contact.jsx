import { motion } from 'framer-motion';
import React from 'react';
import { Button, Form } from 'react-bootstrap';


export default function Contact() {
    return (
        <section id="contact" className="my-5">
            <h2 className="neon">Contact</h2>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Form className="mt-3">
                    <Form.Group className="mb-2" controlId="name">
                        <Form.Control type="text" placeholder="Your name" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="email">
                        <Form.Control type="email" placeholder="Your email" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="message">
                        <Form.Control as="textarea" rows={3} placeholder="Message" />
                    </Form.Group>
                    <Button className="btn-neon" type="submit">Send</Button>
                </Form>
            </motion.div>
        </section>
    );
}