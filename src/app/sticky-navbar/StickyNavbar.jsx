import React, { useState, useEffect, useRef } from 'react';
import styles from './StickyNavbar.module.css';

const StickyNavbar = () => {

    const [isActive, setIsActive] = useState(false);
    const navRef = useRef(null);

    const handleScroll = () => {
        if (window.scrollY > navRef.current.offsetHeight + 150) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const navLinks = [
        { id: 1, text: 'Home', url: '#' },
        { id: 2, text: 'About', url: '#' },
        { id: 3, text: 'Services', url: '#' },
        { id: 4, text: 'Contact', url: '#' },
    ];

    return (
        <div className={`${styles.container}`} >
            <nav className={`${styles.nav} ${isActive ? styles.active : ''}`} ref={navRef}>
                <div className={styles.childContainer}>
                    <h1 className={styles.logo}><a href="#">Sticky Navbar</a></h1>
                    <ul>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} className={`${index === 0 ? styles.current : ''}`}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <div className={styles.hero}>
                <div className={styles.childContainer}>
                    <h1>Weldome to Sticky Navbar</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, culpa.</p>
                </div>
            </div>

            <section className={`${styles.childContainer} ${styles.content}`}>
                <h2>Content One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit atque facere error eum quibusdam deserunt expedita dolorum labore! Perspiciatis aspernatur perferendis voluptatum ratione omnis ipsum officiis. Quo unde recusandae sed esse nobis eaque voluptates quia ab numquam dolor voluptatem incidunt sit fugiat velit asperiores ad distinctio, aliquid nulla repellendus tempore iste est necessitatibus laborum sapiente? Ex voluptatum libero omnis nemo in culpa sed. Suscipit, odio quia! Assumenda dolorum tenetur impedit! Repudiandae quas alias quibusdam consequuntur dolorem quis mollitia neque, nesciunt dolorum ullam iure dolore fugiat eligendi. Sint temporibus quisquam facilis doloribus. Vero eveniet ea fugit inventore, enim animi dolor quam?</p>
                <h3>Content Two</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim natus aliquid placeat quisquam voluptas itaque iusto perferendis modi eius delectus quo ab, vero minus blanditiis omnis expedita necessitatibus veniam commodi voluptatibus error, inventore dolor quaerat maxime rem! Nam culpa quibusdam qui, totam alias architecto, facere iure distinctio, animi repellat numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, error!</p>
            </section>
        </div>
    )
}

export default StickyNavbar;