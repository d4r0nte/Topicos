import Head from "next/head";
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from "react";
import Link from 'next/link'; 

export default function Home() {
    const [count, setCount] = useState(0);

    const handleScroll = () => {
        setCount(prevCount => prevCount + window.scrollY);
    };

    const handleClick = () => {
        setCount(prevCount => prevCount + 1); 
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            {}
            <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                <Link href="/">
                    <button style={{ fontSize: '1rem', padding: '0.5rem' }}>
                        Regresar
                    </button>
                </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <p>You have moved {count} spots</p>
                <button
                    style={{
                        fontSize: '1rem',
                        padding: '1rem',
                    }}
                    onClick={handleClick}
                >
                    Move 1 spot
                </button>
            </div>
        </div>
    );
}
