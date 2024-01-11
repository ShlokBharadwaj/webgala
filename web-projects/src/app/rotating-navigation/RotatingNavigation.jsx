import React, { useState, useRef } from 'react';
import styles from './RotatingNavigation.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faHome, faTimes, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const LoremParagraph = () => {
    const paragraphs = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam id omnis incidunt saepe tempora beatae obcaecati distinctio commodi. Unde, officia dicta repellat iusto inventore atque incidunt molestias vitae suscipit eos, consequuntur veniam animi ad magnam, porro doloribus.",
        "Voluptatem eveniet ut sequi quas alias, sapiente necessitatibus laboriosam. Aperiam tempore illum sapiente eius, debitis deleniti provident ea molestias ex sit culpa vel quae soluta totam, sequi non in fugiat eligendi corrupti recusandae. Minima consequatur dignissimos explicabo obcaecati, ipsum consequuntur aliquam facere voluptas quasi est quos aspernatur quibusdam quas quo animi eum assumenda, reprehenderit ipsa. Adipisci earum nisi blanditiis.",
        "Voluptate, cupiditate. Numquam."
    ];

    return (
        <>
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </>
    );
};

const RotatingNavigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const containerRef = useRef(null);

    const openNav = () => {
        setIsNavOpen(true);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <div className={`${styles.parentContainer}`} ref={containerRef}>
            <div className={`${styles.container} ${isNavOpen ? styles.showNav : ''}`}>
                <div className={styles.circleContainer}>
                    <div className={styles.circle}>
                        <button onClick={closeNav} className={styles.btn1}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <button onClick={openNav} className={styles.btn2}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
                <div className={styles.content}>
                    <h1>Some Article</h1>
                    <small>Some Author</small>
                    <LoremParagraph />
                    <h3>Some Dog</h3>
                    <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="unsplash.com" />
                    <LoremParagraph />
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faHome} />Home
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUserAlt} />About
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} />Contact
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default RotatingNavigation;
