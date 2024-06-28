"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="dark:bg-black dark:text-gray-300 py-10 border-t dark:border-t-gray-900">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-xl font-bold mb-4">W3Jobs</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-6 md:mb-0">
                    <h2 className="text-xl font-bold mb-4">Resources</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/help">Help Center</Link>
                        </li>
                        <li>
                            <Link href="/terms">Terms of Service</Link>
                        </li>
                        <li>
                            <Link href="/privacy">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="https://twitter.com/w3jobs" target="_blank">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com/w3jobs" target="_blank">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/company/w3jobs" target="_blank">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-6">
                <p>&copy; {new Date().getFullYear()} W3Jobs. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;