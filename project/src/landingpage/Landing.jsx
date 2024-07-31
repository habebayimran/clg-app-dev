// src/components/Landing.js
import React, { useEffect } from 'react';
import Background from './Background';
import Navbar from './Navbar';
import Hero from './Hero';
import { AuthProvider,useAuth } from '../landingpage/AuthContext';

const LandingContent = () => {
    const { playStatus, setPlayStatus, heroCount, setHeroCount } = useAuth();

    let heroData = [
        { text1: "Dive into", text2: "what you love!" },
        { text1: "Breath deeply", text2: "live peacefully" },
        { text1: "Unite your", text2: "Soul And Body" },
    ];

    useEffect(() => {
        let timeout;

        if (!playStatus) {
            timeout = setTimeout(() => {
                setHeroCount((count) => (count === 2 ? 0 : count + 1));
            }, 3000);
        }

        return () => clearTimeout(timeout);
    }, [playStatus, setHeroCount]);

    return (
        <div>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <Navbar />
            <Hero
                setPlayStatus={setPlayStatus}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                heroData={heroData[heroCount]}
                playStatus={playStatus}
            />
        </div>
    );
};

const Landing = () => {
    return (
        <AuthProvider>
            <LandingContent />
        </AuthProvider>
    );
};

export default Landing;
