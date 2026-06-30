"use client";

import React, { useState, useEffect } from "react";
import { cormorant, montserrat } from "../font";
import { toast } from "sonner";

export default function CookiesSettings() {
  const [essential, setEssential] = useState(true);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  
  // Track initial/saved state to determine if there are changes
  const [initialAnalytics, setInitialAnalytics] = useState(false);
  const [initialMarketing, setInitialMarketing] = useState(false);

  useEffect(() => {
    const storedPrefs = localStorage.getItem("cookiePreferences");
    if (storedPrefs) {
      try {
        const prefs = JSON.parse(storedPrefs);
        if (typeof prefs.analytics === "boolean") {
          setAnalytics(prefs.analytics);
          setInitialAnalytics(prefs.analytics);
        }
        if (typeof prefs.marketing === "boolean") {
          setMarketing(prefs.marketing);
          setInitialMarketing(prefs.marketing);
        }
      } catch (e) {
        console.error("Failed to parse cookie preferences");
      }
    }
  }, []);

  const hasChanges = analytics !== initialAnalytics || marketing !== initialMarketing;

  const handleSave = () => {
    if (!hasChanges) return;
    
    const prefs = { essential: true, analytics, marketing };
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    
    // Update initial state to match newly saved state
    setInitialAnalytics(analytics);
    setInitialMarketing(marketing);

    console.log("Cookies preferences saved:", prefs);
    toast.success("Preferences saved successfully!");
  };

  return (
    <div className={`min-h-screen py-24 px-8 md:px-16 max-w-4xl mx-auto ${montserrat.className}`}>
      <div className="space-y-12">
        <header className="space-y-4">
          <h1 className={`${cormorant.className} text-4xl md:text-6xl font-bold`}>
            Cookies Settings
          </h1>
          <p className="text-gray-500 text-lg">Manage your cookie preferences for a better experience.</p>
        </header>

        <div className="space-y-8">
          {/* Essential Cookies */}
          <div className="flex items-start justify-between gap-4 p-6 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-[#1a1a1a]/50">
            <div className="space-y-2">
              <h2 className={`${cormorant.className} text-2xl font-semibold`}>Strictly Necessary Cookies</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
              </p>
            </div>
            <div className="mt-1">
              <label className="relative inline-flex items-center cursor-not-allowed">
                <input type="checkbox" className="sr-only peer" checked disabled />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="flex items-start justify-between gap-4 p-6 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <div className="space-y-2">
              <h2 className={`${cormorant.className} text-2xl font-semibold`}>Analytics Cookies</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
              </p>
            </div>
            <div className="mt-1">
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={analytics} 
                  onChange={(e) => setAnalytics(e.target.checked)} 
                />
                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="flex items-start justify-between gap-4 p-6 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <div className="space-y-2">
              <h2 className={`${cormorant.className} text-2xl font-semibold`}>Marketing Cookies</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
              </p>
            </div>
            <div className="mt-1">
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={marketing} 
                  onChange={(e) => setMarketing(e.target.checked)} 
                />
                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-6">
          <button 
            onClick={handleSave}
            disabled={!hasChanges}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              hasChanges 
                ? "bg-foreground text-background hover:opacity-90 cursor-pointer" 
                : "bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed"
            }`}
          >
            Save Preferences
          </button>
        </div>

      </div>
    </div>
  );
}
