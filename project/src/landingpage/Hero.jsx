// src/components/Hero.js
import React from 'react';
import styles from './Hero.module.css';
import arrow_btn from '../assets/arrow_btn.png';
import play_icon from '../assets/play_icon.png';
import pause_icon from '../assets/pause_icon.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../landingpage/AuthContext';

const Hero = ({ heroData }) => {
    const { heroCount, setHeroCount, playStatus, setPlayStatus } = useAuth();

    return (
        <div className={styles.hero}>
            <div className={styles.heroText}>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className={styles.heroExplore}>
                <p>Explore the features</p>
                <Link to="/login"><img src={arrow_btn} alt="Explore" /></Link>
            </div>
            <div className={styles.heroDotPlay}>
                <ul className={styles.heroDots}>
                    <li
                        onClick={() => setHeroCount(0)}
                        className={`${styles.heroDot} ${heroCount === 0 ? styles.heroDotOrange : ''}`}
                    ></li>
                    <li
                        onClick={() => setHeroCount(1)}
                        className={`${styles.heroDot} ${heroCount === 1 ? styles.heroDotOrange : ''}`}
                    ></li>
                    <li
                        onClick={() => setHeroCount(2)}
                        className={`${styles.heroDot} ${heroCount === 2 ? styles.heroDotOrange : ''}`}
                    ></li>
                </ul>
                <div className={styles.heroPlay}>
                    <img
                        onClick={() => setPlayStatus(!playStatus)}
                        src={playStatus ? pause_icon : play_icon}
                        alt="Play/Pause"
                    />
                    <p>See the video</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
