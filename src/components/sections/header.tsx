"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, X, Phone } from 'lucide-react';

const PuppySpotLogo = () => (
    <svg 
        width="175" 
        height="30" 
        viewBox="0 0 175 30" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-auto text-[#333333]"
        aria-label="PuppySpot Logo"
    >
        <path d="M22.8475 22.8443C22.0315 23.8291 20.9138 24.6291 19.6454 25.1437C18.377 25.6583 16.9997 25.8652 15.6315 25.7381C14.2633 25.611 12.9575 25.1539 11.8214 24.4168C10.6853 23.6797 9.75707 22.6881 9.12328 21.5317C8.48948 20.3753 8.17298 19.0927 8.20455 17.7981C8.23611 16.5034 8.61463 15.247 9.30155 14.1536C9.98848 13.0602 10.9602 12.1691 12.1154 11.5714C13.2706 10.9737 14.5683 10.6946 15.8893 10.7681H19.593V13.8863H15.8893C15.1509 13.8471 14.4116 14.0041 13.7547 14.3411C13.0978 14.6781 12.551 15.1824 12.1768 15.7954C11.8026 16.4085 11.6166 17.1065 11.6425 17.8171C11.6685 18.5276 11.9056 19.2155 12.3275 19.8055C12.7494 20.3956 13.3392 20.866 14.0322 21.1685C14.7252 21.471 15.4925 21.5946 16.2415 21.5262C16.9904 21.4578 17.7003 21.1997 18.2974 20.7816C18.8944 20.3635 19.3551 19.8028 19.6335 19.1633H22.8475V22.8443Z" fill="currentColor"/>
        <path d="M37.3693 25.5902H34.1553V10.916H37.3693V25.5902Z" fill="currentColor"/>
        <path d="M51.2721 21.5471C52.2758 21.5471 53.0763 21.2352 53.6738 20.6114C54.2713 19.9877 54.57 19.1415 54.57 18.0729V10.916H57.784V18.0729C57.784 19.7289 57.2503 21.0543 56.1828 22.0492C55.1154 23.0441 53.7463 23.5415 52.0755 23.5415C50.236 23.5415 48.7905 22.9557 47.739 21.7841L47.2415 25.5902H44.0275L45.215 10.916H48.461L47.677 18.1573C48.2425 19.0379 48.9605 19.7289 49.831 20.2299C50.7015 20.7308 51.588 20.9858 52.4905 20.9858L51.2721 21.5471Z" fill="currentColor"/>
        <path d="M72.0152 25.5902H68.8012V10.916H72.0152V13.8863H75.1452V10.916H78.3592V25.5902H75.1452V16.7925H72.0152V25.5902Z" fill="currentColor"/>
        <path d="M91.3129 10.916L87.4819 25.5902H84.1159L80.2849 10.916H83.8299L85.7959 20.0768L87.7779 10.916H91.3129Z" fill="currentColor"/>
        <path d="M107.13 25.5902H95.438V10.916H107.13V13.7848H98.652V16.6375H105.99V19.4903H98.652V22.7002H107.13V25.5902Z" fill="currentColor"/>
        <path d="M123.637 10.916L119.806 25.5902H116.44L112.609 10.916H116.154L118.12 20.0768L120.102 10.916H123.637Z" fill="currentColor"/>
        <path d="M137.957 21.5471C138.96 21.5471 139.761 21.2352 140.358 20.6114C140.956 19.9877 141.254 19.1415 141.254 18.0729V10.916H144.468V18.0729C144.468 19.7289 143.935 21.0543 142.867 22.0492C141.799 23.0441 140.43 23.5415 138.759 23.5415C136.92 23.5415 135.474 22.9557 134.423 21.7841L133.925 25.5902H130.711L131.899 10.916H135.145L134.361 18.1573C134.927 19.0379 135.645 19.7289 136.515 20.2299C137.386 20.7308 138.272 20.9858 139.175 20.9858L137.957 21.5471Z" fill="currentColor"/>
        <path d="M159.088 18.2417C159.088 19.5197 158.759 20.5982 158.099 21.4771C157.44 22.356 156.494 22.995 155.263 23.3941C154.032 23.7932 152.663 23.9928 151.156 23.9928C149.233 23.9928 147.601 23.5819 146.26 22.7602L147.163 19.9562C148.118 20.5312 149.199 20.893 150.407 21.0315C151.614 21.1701 152.618 21.0966 153.419 20.811C154.219 20.5255 154.795 20.0768 155.146 19.4649C155.498 18.853 155.673 18.1402 155.673 17.3262V16.857L155.336 16.9414C154.381 17.2109 153.385 17.3456 152.348 17.3456C150.932 17.3456 149.676 17.027 148.583 16.3897C147.489 15.7523 146.61 14.8211 145.945 13.6826C145.28 12.544 144.948 11.2366 144.948 9.81643C144.948 8.44498 145.316 7.22851 146.052 6.16701C146.788 5.10552 147.818 4.28383 149.034 3.79155C150.25 3.29927 151.586 3.05282 152.939 3.05282C154.494 3.05282 155.824 3.39413 156.928 4.07672C158.031 4.75932 158.832 5.69824 159.329 6.89423C159.827 8.09022 160.075 9.42777 160.075 10.9062V12.115C160.089 12.6391 160.002 13.1609 159.819 13.648C159.636 14.135 159.361 14.5772 159.008 14.951C158.655 15.3248 158.232 15.6231 157.761 15.8315C157.29 16.0399 156.78 16.1542 156.262 16.1685H152.75C153.498 15.5422 153.872 14.7933 153.872 13.9218C153.872 12.8373 153.535 11.9658 152.859 11.3073C152.184 10.6487 151.272 10.3195 150.124 10.3195C148.88 10.3195 147.925 10.7412 147.259 11.5847C146.594 12.4281 146.264 13.5126 146.264 14.838V18.2417Z" fill="currentColor"/>
        <path d="M12.9299 0C10.7499 0 8.65489 0.730321 6.94989 1.99932C5.93989 2.79032 5.09989 3.79232 4.49989 4.93932C3.21989 7.02532 2.62489 9.53932 2.76989 12.0623C3.04989 16.7933 6.84089 20.7343 11.5999 21.1493C11.9709 21.1813 12.3449 21.1963 12.7199 21.1963C13.4399 21.1963 14.1569 21.1163 14.8539 20.9593C16.0699 20.6723 17.1899 20.0893 18.1199 19.2613C19.0499 18.4333 19.7699 17.3883 20.2119 16.2153C20.6549 15.0423 20.8049 13.7843 20.6479 12.5353C20.4909 11.2863 20.0299 10.0883 19.3099 9.02932C17.9299 6.64932 15.5459 4.88732 12.7199 4.39432C12.3449 4.33132 11.9609 4.29832 11.5749 4.29832C10.1699 4.29832 8.79989 4.67332 7.59989 5.38532C6.93989 5.78132 6.36889 6.28432 5.90989 6.87432C5.74989 7.09432 5.76989 7.39432 5.95989 7.59432C6.14989 7.79432 6.45989 7.82832 6.67989 7.66932C7.17989 7.27932 7.75989 6.95332 8.38989 6.70932C9.44989 6.27332 10.5999 6.04632 11.7599 6.04632C14.0799 6.04632 16.1499 7.42632 17.1199 9.53932C17.8899 11.2353 17.8099 13.1613 17.0699 14.7813C16.3299 16.3913 14.9399 17.6533 13.2199 18.1963C12.9299 18.2863 12.6299 18.3373 12.3299 18.3493L12.7199 18.3393C14.4999 18.3393 16.0399 16.9213 16.2999 15.1513C16.3899 14.5413 16.2599 13.9303 15.9399 13.4073C15.6199 12.8843 15.1199 12.4813 14.5399 12.2613C13.9599 12.0413 13.3399 12.0163 12.7499 12.1913C12.1599 12.3663 11.6399 12.7313 11.2799 13.2313C10.7499 13.9313 10.6099 14.8613 10.9199 15.6713C11.2299 16.4813 11.9199 17.0713 12.7499 17.2413C13.2199 17.3413 13.7099 17.2913 14.1399 17.0913C14.2499 17.0413 14.3499 16.9713 14.4399 16.8913C14.6199 16.7313 14.8599 16.7613 14.9999 16.9413C15.1399 17.1213 15.1099 17.3613 14.9299 17.5013C14.7999 17.6013 14.6599 17.6813 14.5099 17.7413C13.9399 17.9813 13.3199 18.0313 12.7199 17.8813C11.5899 17.5913 10.6999 16.6313 10.3599 15.5013C9.92989 14.0013 10.5999 12.4413 11.9599 11.6613C12.5699 11.2413 13.2799 11.0413 13.9999 11.1013C14.7199 11.1613 15.3999 11.4713 15.9399 11.9813C16.4799 12.4913 16.8499 13.1613 16.9699 13.9013C17.0899 14.6413 16.9499 15.3813 16.5799 16.0213C16.3599 16.4113 16.0299 16.7313 15.6299 16.9413C15.2299 17.1513 14.7699 17.2413 14.3199 17.1913C14.2099 17.1813 14.0899 17.1613 13.9799 17.1313C13.7899 17.0813 13.5899 17.1613 13.5099 17.3313C13.4299 17.5013 13.4999 17.7113 13.6699 17.8013C13.8499 17.8913 14.0299 17.9613 14.2199 18.0013C14.8199 18.1413 15.4499 18.0813 16.0199 17.8313C16.6999 17.5313 17.2499 17.0113 17.5999 16.3613C18.1199 15.3613 18.2399 14.2313 17.9499 13.1313C17.6599 12.0313 16.9799 11.0313 16.0399 10.3313C15.0999 9.63132 13.9699 9.29132 12.8299 9.38132C11.9199 9.45132 11.0299 9.77132 10.2399 10.3013C9.09989 11.0513 8.28989 12.1813 8.01989 13.5013C7.74989 14.8213 8.04989 16.1813 8.83989 17.2613C9.62989 18.3413 10.8299 19.0413 12.1599 19.1813C12.3499 19.2013 12.5399 19.2113 12.7199 19.2113C17.4099 19.2113 21.2899 15.5813 21.4999 10.9313C21.6599 7.41132 19.8299 4.13132 16.7499 2.22132C15.3699 1.34132 13.8099 0.881321 12.2499 1.00132C12.4699 0.401321 12.6399 0.221321 12.9299 0Z" fill="currentColor"/>
        <path d="M7.49942 9.61332C7.30942 9.40332 6.98942 9.40332 6.79942 9.61332C6.60942 9.82332 6.60942 10.1533 6.79942 10.3633C6.98942 10.5733 7.30942 10.5733 7.49942 10.3633C7.68942 10.1533 7.68942 9.82332 7.49942 9.61332Z" fill="currentColor"/>
        <path d="M16.5167 6.44855C16.3267 6.23855 16.0067 6.23855 15.8167 6.44855C15.6267 6.65855 15.6267 6.98855 15.8167 7.19855C16.0067 7.40855 16.3267 7.40855 16.5167 7.19855C16.7067 6.98855 16.7067 6.65855 16.5167 6.44855Z" fill="currentColor"/>
    </svg>
);

const MobileMenu = ({ isOpen, closeMenu }: { isOpen: boolean, closeMenu: () => void }) => (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />
      <div 
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm glass-effect shadow-2xl transition-transform duration-300 ease-in-out transform z-50 lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <Link href="/" onClick={closeMenu}>
                <PuppySpotLogo />
            </Link>
            <button onClick={closeMenu} aria-label="Close menu" className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                <X size={24} className="text-gray-600" />
            </button>
        </div>
        <nav className="flex flex-col p-4 space-y-1">
            <Link href="#" className="py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors smooth-transition" onClick={closeMenu}>Available puppies</Link>
            <Link href="#" className="py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors smooth-transition" onClick={closeMenu}>Our promise</Link>
            <Link href="#" className="py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors smooth-transition" onClick={closeMenu}>About us</Link>
            <Link href="#" className="py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors smooth-transition" onClick={closeMenu}>How it works</Link>
            <Link href="#" className="py-3 px-4 text-primary font-semibold hover:bg-green-50 rounded-lg transition-colors smooth-transition" onClick={closeMenu}>Find Your Puppy</Link>
        </nav>
      </div>
    </>
);

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="bg-white sticky top-0 z-30 shadow-sm border-b border-gray-100">
                <div className="bg-gradient-to-r from-primary to-green-600 text-white text-center py-2.5 px-4 text-sm font-medium">
                    <a href="#" className="hover:underline hover:text-green-100 transition-colors">
                        🚚 Nationwide Door-To-Door Delivery Available
                    </a>
                </div>

                <div className="border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between h-[75px]">
                            <div className="flex items-center space-x-8">
                                <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
                                    <PuppySpotLogo />
                                </Link>
                                <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700">
                                    <Link href="#" className="hover:text-primary transition-colors smooth-transition">Available puppies</Link>
                                    <Link href="#" className="hover:text-primary transition-colors smooth-transition">Our promise</Link>
                                    <Link href="#" className="hover:text-primary transition-colors smooth-transition">About us</Link>
                                    <Link href="#" className="hover:text-primary transition-colors smooth-transition">How it works</Link>
                                </nav>
                            </div>
                            
                            <div className="hidden lg:flex items-center space-x-6">
                                <form className="flex items-center">
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            placeholder="Search for Breeds" 
                                            className="border border-gray-300 rounded-l-lg py-2.5 px-4 pr-10 text-sm focus:ring-2 focus:ring-primary focus:border-primary w-52 transition-all smooth-transition" 
                                        />
                                        <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    </div>
                                    <button type="submit" aria-label="Search" className="bg-primary text-white px-4 py-2.5 border border-primary rounded-r-lg hover:bg-green-600 transition-colors smooth-transition">
                                        Search
                                    </button>
                                </form>
                                <Link href="#" className="bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors smooth-transition">
                                    Find Your Puppy
                                </Link>
                            </div>

                            <div className="lg:hidden">
                                <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu" className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <Menu size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        </>
    );
}