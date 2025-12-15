

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import styles from './Gallery.module.css';

// Images Import (Apni images use karein)
import img1 from '../assets/campus25.jpeg'; 
import img2 from '../assets/AJMF_0324.jpg';
import img3 from '../assets/campus.png';
import img4 from '../assets/Anish2.png'; 

// --- Gallery Data with SIZES ---
// options: 'normal' (1x1), 'wide' (2x1), 'tall' (1x2), 'large' (2x2)
const galleryData = [
    { id: 1, src: img1, category: 'Campus', title: 'Main Campus', size: 'large' }, // Bada
    { id: 2, src: img2, category: 'Events', title: 'Celebration', size: 'tall' },   // Lamba
    { id: 3, src: img3, category: 'Students', title: 'Classroom', size: 'normal' }, // Chota
    { id: 4, src: img4, category: 'Events', title: 'Award', size: 'normal' },
    { id: 5, src: img1, category: 'Campus', title: 'Greenery', size: 'wide' },      // Chauda
    { id: 6, src: img2, category: 'Students', title: 'Group Study', size: 'normal' },
    { id: 7, src: img3, category: 'Academics', title: 'Workshop', size: 'tall' },
    { id: 8, src: img4, category: 'Events', title: 'Guest Lecture', size: 'large' },
    { id: 9, src: img1, category: 'Students', title: 'Fun Time', size: 'normal' },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className={styles.pageContainer}>
            
            {/* Header */}
            <section className={styles.headerSection}>
                <motion.h1 
                    className={styles.pageTitle}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Gallery
                </motion.h1>
                <motion.p className={styles.pageSubtitle}>
                Honoring our Legacy, Empowering the Future.
                </motion.p>
            </section>

            {/* Masonry Grid */}
            <div className={styles.galleryGrid}>
                {galleryData.map((item, index) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`${styles.imageCard} ${styles[item.size]}`} // Dynamic Class based on size
                        onClick={() => setSelectedImage(item)}
                    >
                        <div className={styles.imageWrapper}>
                            <img src={item.src} alt={item.title} className={styles.gridImage} />
                            <div className={styles.overlay}>
                                <ZoomIn className={styles.zoomIcon} />
                                <span className={styles.overlayTitle}>{item.title}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal (Same as before) */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        className={styles.lightbox}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div 
                            className={styles.lightboxContent}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
                                <X size={32} />
                            </button>
                            <img src={selectedImage.src} alt={selectedImage.title} className={styles.fullImage} />
                            <h3 className={styles.fullImageTitle}>{selectedImage.title}</h3>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Gallery;