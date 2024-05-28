import { useState, useEffect } from 'react'

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    const [windowHeight, setWindowHeight] = useState()
    const [windowWidth, setWindowWidth] = useState()

    // ─── States ─────────────────────────────────────────────────────────────────────
    // ─── Functions ──────────────────────────────────────────────────────────────────
    const handleResize = () => {
        setWindowHeight(window.innerHeight);
        setWindowWidth(window.innerWidth)
    };
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────
    useEffect(() => {
        if (typeof window !== undefined) {
            setWindowHeight(window.innerHeight)
            setWindowWidth(window.innerWidth)
        }
    }, [])
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return [windowHeight, windowWidth]
}
