import React from 'react';
import { motion } from 'framer-motion';
import styles from './Mission.module.css'; // Note: Using new CSS file

// Images needed for these sections
import FoundationImage from '../assets/AJMF_0324.jpg'; 
import campusImg25 from '../assets/partnershipSign.png';

// --- Animation Variants ---
const baseVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const MissionVisionSection = () => {
    return (
        <section className={styles.missionVisionSection}>
            <div className={styles.cardsContainer}>
                {/* Vision Card */}
                <motion.div
                    className={styles.missionVisionCard}
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariants}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h2 className={styles.cardTitle}>VISION</h2>
                    <p className={styles.cardText}>
                        To enable a dignified life for underprivileged communities by focusing on skill development, capacity building, and sustainable growth.
                    </p>
                </motion.div>

                {/* Mission Card */}
                <motion.div
                    className={styles.missionVisionCard}
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariants}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h2 className={styles.cardTitle}>MISSION</h2>
                    <p className={styles.cardText}>
                        Anish Jadhav Memorial Foundation aims to enhance employment opportunities and entrepreneurship through various social and educational programs that promote skill development.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const FounderSection = () => {
    return (
        <section className={styles.founderSection}>
            <div className={styles.founderContainer}>
                <div className={styles.founderImageContainer}>
                    <img src={FoundationImage} alt="Brigadier (Dr) Kishor Jadhav" className={styles.founderImage} />
                </div>
                <div className={styles.founderInfo}>
                    <h2 className={styles.founderNameTitle}>Brigadier (Dr) Kishor Jadhav</h2>
                    <p className={styles.founderRole}>Founder of Anish Jadhav Memorial Foundation</p>
                    <p className={styles.founderDescription}>
                        The Anish Jadhav Memorial Foundation was established by his parents Brigadier Kishor Jadhav and Mrs. Neeta Jadhav in loving memory of his son, Anish. In partnership with NavGurukul, we provide comprehensive residential education programs that equip underprivileged youth with the skills, knowledge, and opportunities they need to build aspiration careers and meaningful lives.
                    </p>
                </div>
            </div>
        </section>
    );
};

const PedagogySection = () => {
    return (
        <motion.section
            className={styles.pedagogySection}
            initial="hidden"
            whileInView="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <h2 className={styles.pedagogyTitle}>RESIDENTIAL COURSES - PEDAGOGY</h2>
            <div className={styles.pedagogyText}>
                <p>At our campus, we follow a unique, innovative, and effective learning approach that goes beyond traditional education:</p>
                <ul>
                    <li>We emphasize Self-Learning, guided by a structured system of peer mentorship and industry mentors.</li>
                    <li>Facilitators act as learning coaches to support and enhance the process, rather than traditional full-time teachers.</li>
                    <li>The curriculum focuses on developing the essential ability of 'Learning How to Learn' in a world driven by AI.</li>
                    <li>Our student-driven campus provides real-world leadership and collaboration opportunities through the Student Council System.</li>
                    <li>The program develops essential life skills (communication, negotiation, problem-solving, and teamwork).</li>
                </ul>
            </div>
        </motion.section>
    );
};

const VisionInPartnershipSection = () => {
    return (
        <motion.section
            className={styles.visionPartnershipSection}
            initial="hidden"
            whileInView="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className={styles.visionPartnershipContent}>
                <div className={styles.visionPartnershipLeft}>
                    <motion.h2 className={styles.visionPartnershipTitle} variants={baseVariants}>
                        Our Vision in Partnership
                    </motion.h2>
                    <motion.p className={styles.visionPartnershipText} variants={baseVariants} transition={{ delay: 0.1 }}>
                        In partnership with <span className={styles.navgurukulHighlight}> <span className={styles.navgurukul}>Nav</span>Gurukul</span>, a pioneering organization committed to providing residential education to underprivileged youth, the foundation has created a comprehensive ecosystem of learning and growth.
                    </motion.p>
                    <motion.p className={styles.visionPartnershipText} variants={baseVariants} transition={{ delay: 0.2 }}>
                        This includes residential facilities, nutritious meals, world-class instruction, and career placement support. Today, the foundation stands as a beacon of hope, offering four specialized schools that provide pathways to success in <span className={styles.highlightGreen}>programming, business, education, and second-chance opportunities.</span>
                    </motion.p>
                </div>
                <div className={styles.visionPartnershipRight}>
                    <motion.div className={styles.visionPartnershipImageContainer} variants={baseVariants} transition={{ delay: 0.4 }}>
                        <img src={campusImg25} alt="NavGurukul Students" className={styles.visionPartnershipImage} />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

const Mission = () => {
    return (
        <div className={styles.pageContainer}>
            {/* Page Header (Optional) */}
            <div style={{ textAlign: 'center', padding: '40px 0 0 0' }}>
                <h1 className={styles.modernTitleBlue}>Our Mission & Vision</h1>
            </div>

            <MissionVisionSection />
            <FounderSection />
            <PedagogySection />
            <VisionInPartnershipSection />
        </div>
    );
};

export default Mission;