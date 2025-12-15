



// import React from 'react';
// import { motion } from 'framer-motion';
// import styles from './Home.module.css';


// import campusImg4 from '../assets/campus25.jpeg';
// import FoundationImage from '../assets/AJMF_0324.jpg';


// const baseVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
// };


// const HeroSection = () => {
//     return (
//         <motion.section
//             className={styles.modernHeroSection}
//             initial="hidden"
//             animate="visible"
//             variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
//         >
//             <div className={styles.heroContent}>
//                 {/* Title text */}
//                 <motion.h1 className={styles.modernTitle} variants={baseVariants}>
//                     Anish Jadhav
//                 </motion.h1>
//                 <motion.h1 className={styles.modernTitleBlue} variants={baseVariants} transition={{ delay: 0.15 }}>
//                     Memorial
//                 </motion.h1>
//                 <motion.h1 className={styles.modernTitle} variants={baseVariants} transition={{ delay: 0.3 }}>
//                     Foundation
//                 </motion.h1>

//                 {/* Subtitle */}
//                 <motion.p className={styles.modernSubtitle} variants={baseVariants} transition={{ delay: 0.45 }}>
//                     TORCH BEARER FOR THE NEEDY
//                 </motion.p>

//                 {/* Founder Info & Image */}
//                 <motion.div className={styles.modernAuthorInfo} variants={baseVariants} transition={{ delay: 0.6 }}>
//                     <img
//                         src={FoundationImage}
//                         alt="Brigadier (Dr) Kishor Jadhav"
//                         className={styles.modernAuthorImage}
//                     />
//                     <div className={styles.modernAuthorText}>
//                         <p className={styles.modernAuthorName}>Brigadier (Dr) Kishor Jadhav, Ph D</p>
//                         <p className={styles.modernAuthorTitle}>Founder of Anish Jadhav Memorial Foundation</p>
//                     </div>
//                 </motion.div>
//             </div>

//             {/* Right Side Big Image */}
//             <div className={styles.modernHeroImageContainer}>
//                 <img
//                     src={campusImg4}
//                     alt="Anish Jadhav Memorial Foundation Team"
//                     className={styles.modernHeroImage}
//                 />
//             </div>
//         </motion.section>
//     );
// };



// const Home = () => {
//     return (
//         <div className={styles.pageContainer}>
//             {/* Sirf Hero Section dikhega */}
//             <HeroSection />
//         </div>
//     );
// };

// export default Home;


import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BookOpen } from 'lucide-react'; // Icons for beneficiaries
import styles from './Home.module.css';

// Images
import campusImg4 from '../assets/campus25.jpeg'; 
import FoundationImage from '../assets/AJMF_0324.jpg'; 
import BrigadierJadhav from '../assets/campus.png'; // Using the image you used in QuoteSection

// --- Animation Variants ---
const baseVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } }
};

// --- 1. HERO SECTION (Unchanged) ---
const HeroSection = () => {
    return (
        <motion.section
            className={styles.modernHeroSection}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <div className={styles.heroContent}>
                <motion.h1 className={styles.modernTitle} variants={baseVariants}>Anish Jadhav</motion.h1>
                <motion.h1 className={styles.modernTitleBlue} variants={baseVariants}>Memorial</motion.h1>
                <motion.h1 className={styles.modernTitle} variants={baseVariants}>Foundation</motion.h1>

                <motion.p className={styles.modernSubtitle} variants={baseVariants}>
                    TORCH BEARER FOR THE NEEDY
                </motion.p>

                <motion.div className={styles.modernAuthorInfo} variants={baseVariants}>
                    <img src={FoundationImage} alt="Brigadier (Dr) Kishor Jadhav" className={styles.modernAuthorImage} />
                    <div className={styles.modernAuthorText}>
                        <p className={styles.modernAuthorName}>Brigadier (Dr) Kishor Jadhav, Ph D</p>
                        <p className={styles.modernAuthorTitle}>Founder of Anish Jadhav Memorial Foundation</p>
                    </div>
                </motion.div>
            </div>
            <div className={styles.modernHeroImageContainer}>
                <img src={campusImg4} alt="Team" className={styles.modernHeroImage} />
            </div>
        </motion.section>
    );
};

// --- 2. NEW: STORY BEHIND THE FOUNDATION (Shifted from AboutAnish) ---
const FoundationStorySection = () => {
    return (
        <section className={styles.storySection}>
            <div className={styles.storyContainer}>
                {/* Left: Text Content */}
                <motion.div 
                    className={styles.storyContent}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2 className={styles.sectionTitle} variants={baseVariants}>
                        The Story Behind the Foundation
                    </motion.h2>
                    <motion.div className={styles.storyDivider} variants={baseVariants}></motion.div>
                    
                    <motion.p className={styles.storyText} variants={baseVariants}>
                        The <strong>Anish Jadhav Memorial Foundation (AJMF)</strong> is a non-profit NGO established
                        in memory of <strong>Anish Jadhav</strong>, the only child of Brigadier Kishor and Mrs. Neeta Jadhav.
                        Anish worked with Nikon India’s Core Technical Team before his untimely passing.
                    </motion.p>
                    <motion.p className={styles.storyText} variants={baseVariants}>
                        AJMF, registered under the Bombay Public Trust Act of 1950, is dedicated to providing
                        skills training to the underprivileged across India.
                    </motion.p>

                    <motion.ul className={styles.storyList} variants={baseVariants}>
                        <li>India faces a significant skills gap between industry requirements and workforce capabilities.</li>
                        <li>Contributing factors include inadequate training facilities and outdated curricula.</li>
                        <li>To bridge this gap, AJMF focuses on mapping local skill demands and tailoring programs to meet specific needs.</li>
                    </motion.ul>
                </motion.div>

                {/* Right: Image Decoration */}
                <motion.div 
                    className={styles.storyImageWrapper}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.imageBackdrop}></div>
                    <img src={BrigadierJadhav} alt="Founder" className={styles.storyImage} />
                </motion.div>
            </div>
        </section>
    );
};

// --- 3. NEW: CURRENT PROJECT & IMPACT (Special Presentation) ---
const CurrentProjectSection = () => {
    return (
        <section className={styles.impactSection}>
            <div className={styles.impactOverlay}></div> {/* Dark overlay for text pop */}
            
            <div className={styles.impactContainer}>
                {/* Main Collaboration Statement */}
                <motion.div 
                    className={styles.impactHeader}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={baseVariants}
                >
                    <span className={styles.tagline}>CURRENT PROJECT</span>
                    <h2 className={styles.impactStatement}>
                        Collaborating with <span className={styles.highlightGold}>NavGurukul Foundation</span> to provide 
                        <span className={styles.highlightWhite}> FREE residential education</span> in Software Engineering & Digital Marketing.
                    </h2>
                    <p className={styles.impactSubText}>
                        Empowering 150 underprivileged girls at the Anish Jadhav Memorial Foundation Skilling Institute.
                    </p>
                </motion.div>

                {/* Target Beneficiaries - Cards Design */}
                <div className={styles.beneficiariesWrapper}>
                    <h3 className={styles.beneTitle}>Target Beneficiaries</h3>
                    
                    <div className={styles.beneGrid}>
                        {/* Card 1 */}
                        <motion.div 
                            className={styles.beneCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.iconBox}><Users size={32} /></div>
                            <h4>Underprivileged Youth</h4>
                            <p>Talented youth from low-income backgrounds who cannot afford expensive college education.</p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div 
                            className={styles.beneCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.iconBox}><Target size={32} /></div>
                            <h4>Girls from Humble Backgrounds</h4>
                            <p>Daughters of daily wage laborers, maids, auto-drivers, and brick kiln workers seeking a better future.</p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div 
                            className={styles.beneCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.iconBox}><BookOpen size={32} /></div>
                            <h4>Struggling Graduates</h4>
                            <p>Graduates unable to find suitable employment due to a lack of industry-specific technical skills.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- MAIN HOME COMPONENT ---
const Home = () => {
    return (
        <div className={styles.pageContainer}>
            <HeroSection />
            <FoundationStorySection />
            <CurrentProjectSection />
        </div>
    );
};

export default Home;