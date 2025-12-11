// src/components/CookieBanner.tsx
import React, { useEffect, useState } from 'react';
import { initAnalytics } from '../analytics';
import { Link } from 'react-router-dom';

const COOKIE_KEY = 'it_legends_cookie_consent'; // "accepted" || "declined"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY);

      if (!stored) {
        // No coice yet - Show Banner
        setVisible(true);
        } else if (stored === 'accepted') {
          // User already accepted - Load analytics immediately
          initAnalytics();
        }
      } catch {
        // If localStorage is blocked for some reason, still show the banner
        setVisible(true);
      }
    }, []);

    const handleAccept = () => {
      try {
        localStorage.setItem(COOKIE_KEY, 'accepted');
      } catch {
        // Ignore 
      }
      initAnalytics();
      setVisible(false);
    };

    const handleDecline = () => {
      try {
        localStorage.setItem(COOKIE_KEY, 'declined');
      } catch {
        // Ignore
      }
      setVisible(false);
    };

    if (!visible) return null;

    return (
      <div className="fixed inset-x-0 bottom-0 z-[60]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
          <div className="rounded-2xl bg-black/90 border border-itgray2 shadow-lg backdrop-blur flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-5">
            <div className="text-xs sm:text-sm text-itsilver">
              <p className="font-semibold text-white mb-1">
                We use cookies to improve your experience.
              </p>
              <p>
                IT Legends uses essential cookies for core site functionality and
                optional analytics cookies to understand how our website is used.
                You can choose whether to enable analytics.
              </p>
                <p className="mt-2 text-itsilver/70">
                  Read more in our{' '}
                  <Link
                    to="/privacy-policy"
                    className="text-itblue hover:text-itred underline underline-offset-2"
                  >
                    Privacy &amp; Cookie Policy
                  </Link>
                  .
                </p>
                </div>

                <div className="flex flex-wrap gap-3 sm:flex-nowrap sm:items-center">
                  <button
                    type="button"
                    onClick={handleDecline}
                    className="px-4 py-2 rounded-lg border border-itgray2 text-xs sm:text-sm text-itsilver hover:border-itred hover:text-itred transition-colors"
                  >
                    Decline analytics
                  </button>
                  <button
                    type="button"
                    onClick={handleAccept}
                    className="btn-primary text-xs sm:text-sm px-5 py-2"
                  >
                    Accept analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
    )
}