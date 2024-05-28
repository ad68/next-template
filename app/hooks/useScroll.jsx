import React, { useState, useEffect } from 'react'

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    const [scrollYPosition, setScrollYPosition] = useState(0);
    // ─── States ─────────────────────────────────────────────────────────────────────
    // ─── Functions ──────────────────────────────────────────────────────────────────
    const handleScroll = () => {
        const newScrollYPosition = window.pageYOffset;
        setScrollYPosition(newScrollYPosition);
    };
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return [scrollYPosition]
}
