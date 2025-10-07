import React from 'react';
import { Container } from 'react-bootstrap';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import NavbarTop from './components/NavbarTop';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
    return (
        <div className="app-root">
            <NavbarTop />
            <main>
                <Hero />
                <Container className="mt-5">
                    <About />
                    <Projects />
                    <Skills />
                    <Contact />
                </Container>
            </main>
            <footer className="text-center py-4 muted">Created by Ferry Andika Firmansyah</footer>
        </div>
    );
}