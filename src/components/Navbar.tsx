'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/context/AuthContext';
import { LanguageSelector } from './LanguageSelector';
import { DocumentIcon } from '@heroicons/react/24/solid';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function Navbar() {
  const { user, signOut } = useAuth();
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow z-50">
      <div className="w-full px-4 max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between h-14 md:h-20">
          <div className="flex items-center flex-1 md:flex-none">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden z-50 -ml-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6 text-gray-600 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 md:space-x-3">
              <DocumentIcon className="h-7 w-7 md:h-8 md:w-8 text-blue-600" />
              <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                PDF Processor
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link
              href="/tools"
              className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t('common.tools')}
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t('common.pricing')}
            </Link>
            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t('common.about')}
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Right side utilities */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-auto">
              <LanguageSelector />
            </div>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>

            {/* Auth buttons */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {t('common.dashboard')}
                  </Link>
                  <button
                    onClick={signOut}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                  >
                    {t('common.signOut')}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/signin"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {t('common.signIn')}
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {t('common.signUp')}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-30 md:hidden ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        {/* Menu Panel */}
        <div
          className={`md:hidden fixed inset-x-0 top-0 z-40 h-[50vh] bg-white dark:bg-gray-900 transform ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          } transition-transform duration-300 ease-in-out shadow-lg rounded-b-2xl`}
        >
        <div className="flex flex-col h-full w-full">
          {/* Close button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6 text-gray-600 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Menu content */}
          <div className="flex-1 overflow-y-auto pt-14 pb-4 px-6 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
            {/* Logo in mobile menu */}
            <Link
              href="/"
              className="flex flex-col items-center space-y-2 mb-6 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <DocumentIcon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                PDF Processor
              </span>
            </Link>

            {/* Navigation Links */}
            <nav className="w-full space-y-4 md:space-y-0 md:space-x-6 mb-6">
              <Link
                href="/tools"
                className="flex items-center justify-center md:justify-start w-full space-x-3 text-lg text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <span>{t('common.tools')}</span>
              </Link>
              <Link
                href="/pricing"
                className="flex items-center justify-center md:justify-start w-full space-x-3 text-lg text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('common.pricing')}</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-center md:justify-start w-full space-x-3 text-lg text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('common.about')}</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center md:justify-start w-full space-x-3 text-lg text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contact Us</span>
              </Link>
            </nav>

            {/* Settings Section */}
            <div className="py-4 border-t border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <LanguageSelector />
                </div>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <SunIcon className="h-6 w-6 text-yellow-500" />
                  ) : (
                    <MoonIcon className="h-6 w-6 text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Auth Section */}
            <div className="py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center md:text-left">
              {user ? (
                <div className="space-y-4 w-full">
                  <Link
                    href="/dashboard"
                    className="flex items-center justify-center md:justify-start w-full min-h-[48px] space-x-3 text-lg text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5M8 8v8m8-16l4 4-4 4m-4-4h12.01M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{t('common.dashboard')}</span>
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center md:justify-start w-full min-h-[48px] space-x-3 text-lg text-gray-600 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>{t('common.signOut')}</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-4 w-full">
                  <Link
                    href="/auth/signin"
                    className="flex items-center justify-center md:justify-start w-full min-h-[48px] space-x-3 text-lg text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span>{t('common.signIn')}</span>
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="flex items-center justify-center space-x-3 w-full min-h-[48px] px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    <span>{t('common.signUp')}</span>
                  </Link>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    </nav>
  );
}
