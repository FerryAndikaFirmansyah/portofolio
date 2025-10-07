import React from "react";
import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPhp,
    FaDatabase,
    FaGithub,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiSequelize,
    SiPostgresql,
    SiMysql,
    SiDbeaver,
} from "react-icons/si";
import "../styles.css";

const Skills = () => {
    const skills = [
        { name: "HTML", icon: <FaHtml5 color="#E44D26" /> },
        { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
        { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
        { name: "React JS", icon: <FaReact color="#61DBFB" /> },
        { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
        { name: "Sequelize", icon: <SiSequelize color="#52B0E7" /> },
        { name: "API", icon: <FaDatabase color="#F0DB4F" /> },
        { name: "PHP", icon: <FaPhp color="#777BB3" /> },
        { name: "MySQL", icon: <SiMysql color="#00758F" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
        { name: "SQL Server", icon: <FaDatabase color="#CC2927" /> },
        { name: "DBeaver", icon: <SiDbeaver color="#4A5568" /> },
        { name: "GitHub", icon: <FaGithub color="#181717" /> },
    ];

    return (
        <section className="skills-section py-5" id="skills">
            <div className="container text-center">
                <h2 className="text-center mb-5 fw-bold neon-text">💡 Skills & Tools</h2>

                {/* Grid container */}
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-card text-center"
                            whileHover={{ scale: 1.08 }}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.05 }}
                        >
                            <div className="icon fs-1 mb-2">{skill.icon}</div>
                            <p className="mb-0 fw-semibold">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
