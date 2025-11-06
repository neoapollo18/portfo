"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 sm:top-8 sm:right-8 text-muted-foreground hover:text-foreground transition-colors z-10 p-2 rounded-md hover:bg-muted/50"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-4 tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Charles Gao
          </h1>
            <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-lg mx-auto">
              I'm an engineer interested in AI/ML and NLP. I'm currently based in LA, attending USC, and majoring in Cognitive Science & AI.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed font-light mt-4 max-w-lg mx-auto text-center">
              Check out my <a 
                href="/Charles Gao Resume (46).pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors underline decoration-dotted decoration-1 underline-offset-2 decoration-muted-foreground/40"
              >resume</a> or contact me at <a 
                href="mailto:csgao@usc.edu?subject=Hello%20from%20your%20portfolio" 
                className="text-muted-foreground hover:text-foreground transition-colors underline decoration-dotted decoration-1 underline-offset-2 decoration-muted-foreground/40"
              >csgao@usc.edu</a>.
            </p>
                    <div className="flex items-center justify-center gap-4 mt-6">

            <a href="https://linkedin.com/in/csgao/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://twitter.com/cgao125" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://github.com/neoapollo18" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </header>

                {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-lg font-200 text-foreground mb-2 tracking-tight">Work</h2>
          
          <div className="divide-y divide-border/60">
            <a 
              href="https://lightweightlabs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2 hover:bg-muted/50 rounded-md transition-colors"
            >
              <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img 
                  src="/blackl.jpg"
                  alt="Lightweight Labs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-normal text-foreground">Growth</h3>
                    <span className="text-xs text-foreground/60">Lightweight Labs</span>
                  </div>
                  <div className="text-xs text-foreground/60">
                    2025
                  </div>
                </div>
              </div>
            </a>

            <a 
              href="https://robust.so" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2 hover:bg-muted/50 rounded-md transition-colors"
            >
              <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img 
                  src="/robust.jpg"
                  alt="Robust"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-normal text-foreground">Engineering</h3>
                    <span className="text-xs text-foreground/60">Robust</span>
                </div>
                  <div className="text-xs text-foreground/60">
                    2025
                  </div>
                </div>
              </div>
            </a>

            <a 
              href="https://usclavalab.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2 hover:bg-muted/50 rounded-md transition-colors"
            >
              <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img 
                  src="/lavalab.jpg"
                  alt="LavaLab"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-normal text-foreground">Developer</h3>
                    <span className="text-xs text-foreground/60">LavaLab</span>
                  </div>
                  <div className="text-xs text-foreground/60">
                    2025
                  </div>
                </div>
              </div>
            </a>

            <a 
              href="https://kardn.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2 hover:bg-muted/50 rounded-md transition-colors"
            >
              <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img 
                  src="/kardn_logo.jpg"
                  alt="Kardn"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-normal text-foreground">Engineering</h3>
                    <span className="text-xs text-foreground/60">Kardn</span>
                  </div>
                  <div className="text-xs text-foreground/60">
                    2024-25
                  </div>
                </div>
              </div>
            </a>

            <a 
              href="https://nyuolab.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2 hover:bg-muted/50 rounded-md transition-colors"
            >
              <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img 
                  src="/nyulangonehealth_logo.jpg"
                  alt="NYU Langone Health"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-normal text-foreground">Researcher</h3>
                    <span className="text-xs text-foreground/60">NYU Langone</span>
                  </div>
                  <div className="text-xs text-foreground/60">
                    2023
                  </div>
                </div>
              </div>
            </a>

            <a 
              href="https://www.cam.ac.uk/research" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2 last:pb-0 hover:bg-muted/50 rounded-md transition-colors"
            >
              <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img 
                  src="/university_of_cambridge_logo.jpg"
                  alt="University of Cambridge"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-normal text-foreground">Researcher</h3>
                    <span className="text-xs text-foreground/60">University of Cambridge</span>
                  </div>
                  <div className="text-xs text-foreground/60">
                    2022
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>

                        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-lg font-200 text-foreground mb-2 tracking-tight">Education</h2>
          
                    <div className="divide-y divide-border/60">
            <a 
              href="https://usc.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2 hover:bg-muted/50 rounded-md transition-colors"
            >
              <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img 
                  src="/usc.jpg"
                  alt="University of Southern California"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-normal text-foreground">University of Southern California</h3>
                    <span className="text-xs text-foreground/60">B.S. in Cognitive Science and AI</span>
                </div>
                  <div className="text-xs text-foreground/60">
                    2024-27
                  </div>
                </div>
              </div>
            </a>

                        <a 
              href="https://exeter.edu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2 last:pb-0 hover:bg-muted/50 rounded-md transition-colors"
            >
              <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img 
                  src="/phillips_exeter_academy_logo.jpg"
                  alt="Phillips Exeter Academy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-normal text-foreground">Phillips Exeter Academy</h3>
                    <span className="text-xs text-foreground/60"> </span>
                  </div>
                  <div className="text-xs text-foreground/60">
                    2021-24
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12 px-4 sm:px-0">
          <h2 className="text-lg font-200 text-foreground mb-6 tracking-tight">Projects</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <a 
              href="https://github.com/neoapollo18/LM-ClinicalTrials" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-4 sm:p-5 border border-border/40 rounded-xl hover:border-border hover:bg-muted/30 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-foreground group-hover:text-foreground mb-1">ClinicalTrials</h3>
                  <p className="text-xs text-muted-foreground/70 font-mono mb-3 sm:mb-0">NYU Langone Health OLab</p>
                  <p className="text-sm text-muted-foreground leading-relaxed sm:hidden">
                    Engineered NLP models (Doc2Vec, BioBERT) to predict early termination of clinical trials. 
                  </p>
                </div>
                <svg className="w-4 h-4 text-muted-foreground/60 group-hover:text-foreground transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed hidden sm:block">
                Engineered NLP models (Doc2Vec, BioBERT) to predict early termination of clinical trials. 
              </p>
            </a>

            <a 
              href="https://github.com/neoapollo18/triage2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-4 sm:p-5 border border-border/40 rounded-xl hover:border-border hover:bg-muted/30 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-foreground group-hover:text-foreground mb-1">Trifect</h3>
                  <p className="text-xs text-muted-foreground/70 font-mono mb-3 sm:mb-0">LavaLab</p>
                  <p className="text-sm text-muted-foreground leading-relaxed sm:hidden">
                    ML-driven b2b marketplace that connects 3PLs and businesses together. 
                  </p>
                </div>
                <svg className="w-4 h-4 text-muted-foreground/60 group-hover:text-foreground transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed hidden sm:block">
                ML-driven b2b marketplace that connects 3PLs and businesses together. 
              </p>
            </a>

            <a 
              href="https://vrjl.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-4 sm:p-5 border border-border/40 rounded-xl hover:border-border hover:bg-muted/30 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-foreground group-hover:text-foreground mb-1">VRJL</h3>
                  <p className="text-xs text-muted-foreground/70 font-mono mb-3 sm:mb-0">Personal Project</p>
                  <p className="text-sm text-muted-foreground leading-relaxed sm:hidden">
                    All-in-one platform where music artists and managers can register songs and manage royalties.
                  </p>
                </div>
                <svg className="w-4 h-4 text-muted-foreground/60 group-hover:text-foreground transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed hidden sm:block">
                All-in-one platform where music artists and managers can register songs and manage royalties.
              </p>
            </a>

          </div>
        </section>
      </div>
    </div>
  );
}
