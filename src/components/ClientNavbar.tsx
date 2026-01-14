'use client';

import { useEffect, useState } from 'react';
import Navbar from './Navbar';

/**
 * Client Wrapper for Navbar
 * Ensures Navbar is only rendered on client side after ThemeProvider is mounted
 */
export default function ClientNavbar() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Jangan render apa-apa di server (SSR) untuk menghindari mismatch
    if (!mounted) {
        return null;
    }

    return <Navbar />;
}