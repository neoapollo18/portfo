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
      <div className="container-sleek py-16">
        {/* Theme Toggle */}
        <div className="absolute top-8 right-8">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m6.364-6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M17.657 17.657l-.707.707M12 6a6 6 0 016 6c0 1.887-.884 3.568-2.25 4.646A5.5 5.5 0 0112 18.5a5.5 5.5 0 01-5.5-5.5c0-1.887.884-3.568 2.25-4.646A6 6 0 0112 6z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Header/Contact Information */}
        <div className="section">
          <h1 className="text-heading text-foreground mb-4">
            Charles Gao
          </h1>
          <div className="text-body space-y-2">
            <p><strong>Phone:</strong> 917-890-2058</p>
            <p><strong>Email:</strong> <a href="mailto:csgao@usc.edu" className="link">csgao@usc.edu</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/csgao/" className="link" target="_blank" rel="noopener noreferrer">linkedin.com/in/csgao/</a></p>
          </div>
        </div>

        {/* Education Section */}
        <div className="section">
          <h2 className="text-subheading text-foreground mb-6">EDUCATION</h2>
          
          <div className="space-y-6">
            <div>
              <div className="work-card">
                <div className="work-icon" style={{backgroundColor: '#dc2626'}}>
                  <span className="text-white font-bold text-sm">USC</span>
                </div>
                <div className="work-content">
                  <div className="work-title">Presidential Scholar</div>
                  <div className="work-company">University of Southern California</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    B.S. in Cognitive Science and AI • Los Angeles, CA • Aug. 2024 – June 2027
                  </div>
                </div>
              </div>
              <div className="text-body mt-2 ml-16">
                <p>• USC merit-based half-tuition scholarship</p>
                <p>• Cumulative GPA: 3.7/4.0 | Honors: Dean's List</p>
              </div>
            </div>

            <div>
              <div className="work-card">
                <div className="work-icon" style={{backgroundColor: '#1e40af'}}>
                  <span className="text-white font-bold text-sm">PE</span>
                </div>
                <div className="work-content">
                  <div className="work-title">High School Diploma</div>
                  <div className="work-company">Phillips Exeter Academy</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Exeter, NH • Sep. 2021 – June 2024
                  </div>
                </div>
              </div>
              <div className="text-body mt-2 ml-16">
                <p>• SAT Scores: Math 790 | Reading & Writing 790 | National Merit Scholar | Highest Academic Honors</p>
                <p>• Relevant Coursework: Quantum Mechanics, Multivariable Calculus, Statistical Thermodynamics, Modern Physics, Genetics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="section">
          <h2 className="text-subheading text-foreground mb-6">PROFESSIONAL EXPERIENCE</h2>
          
          <div className="space-y-6">
            <div>
              <div className="work-card">
                <div className="work-icon" style={{backgroundColor: '#16a34a'}}>
                  <span className="text-white font-bold text-sm">LL</span>
                </div>
                <div className="work-content">
                  <div className="work-title">Growth</div>
                  <div className="work-company">Lightweight Labs</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    San Francisco, CA • June. 2024 – July. 2025
                  </div>
                </div>
              </div>
              <div className="text-body mt-2 ml-16">
                <p>• Worked directly under founders David Yang (Founder of Fullstack Academy) and Aaron Iba (Founder of Etherpad, ex-YC GP) leading redesign and growth of accounting company.</p>
                <p>• Led baseline redesign of frontend and spearheaded demand generation engine.</p>
              </div>
            </div>

            <div>
              <div className="work-card">
                <div className="work-icon" style={{backgroundColor: '#7c3aed'}}>
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <div className="work-content">
                  <div className="work-title">Growth, Principal Software Engineer</div>
                  <div className="work-company">Kardn</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    San Francisco, CA • Oct. 2024 – Feb. 2025
                  </div>
                </div>
              </div>
              <div className="text-body mt-2 ml-16">
                <p>• Developed and led a strategic go-to-market plan for AI startup, leveraging data-driven analysis to uncover revenue streams and optimize market penetration.</p>
                <p>• Directed a rollout of a browser application (React, Next.js), ensuring alignment between product and client.</p>
              </div>
            </div>

            <div>
              <div className="work-card">
                <div className="work-icon" style={{backgroundColor: '#0891b2'}}>
                  <span className="text-white font-bold text-sm">NYU</span>
                </div>
                <div className="work-content">
                  <div className="work-title">AI Researcher</div>
                  <div className="work-company">NYU Langone Health</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    New York City, NY • June. 2023 – Nov. 2023
                  </div>
                </div>
              </div>
              <div className="text-body mt-2 ml-16">
                <p>• Engineered and optimized NLP models (Doc2Vec, BioBERT) to predict early termination of clinical trials, using deep learning frameworks to enable risk assessments and financial analysis of clinical trials.</p>
                <p>• Developed data pipelines to preprocess and synthesize datasets from clinicaltrials.gov, isolating key risk factors for trial discontinuation and delivering semantic insights through feature engineering and predictive analytics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Founding Experience Section */}
        <div className="section">
          <h2 className="text-subheading text-foreground mb-6">FOUNDING EXPERIENCE</h2>
          
          <div className="space-y-6">
            <div>
              <div className="work-card">
                <div className="work-icon" style={{backgroundColor: '#ea580c'}}>
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <div className="work-content">
                  <div className="work-title">Engineering, Founding Team</div>
                  <div className="work-company">Robust</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    New York, NY • May. 2025 – July. 2025
                  </div>
                </div>
              </div>
              <div className="text-body mt-2 ml-16">
                <p>• Co-led product development and ideation.</p>
                <p>• Helped jumpstart operations for the Summer - pre-seed led by Z Fellows and Link Ventures.</p>
              </div>
            </div>

            <div>
              <div className="work-card">
                <div className="work-icon" style={{backgroundColor: '#dc2626'}}>
                  <span className="text-white font-bold text-sm">LL</span>
                </div>
                <div className="work-content">
                  <div className="work-title">Co-Founder, Developer</div>
                  <div className="work-company">LavaLab @ USC</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Los Angeles, CA • Jan. 2025 – May. 2025
                  </div>
                </div>
              </div>
              <div className="text-body mt-2 ml-16">
                <p>• Built Trifect, a ML-based 3PL Matchmaking Company at USC's premier startup incubator.</p>
                <p>• Pitched to a board of investors and leaders in the transportation and logistics industry.</p>
              </div>
            </div>

            <div>
              <div className="work-card">
                <div className="work-icon" style={{backgroundColor: '#0d9488'}}>
                  <span className="text-white font-bold text-sm">WP</span>
                </div>
                <div className="work-content">
                  <div className="work-title">Captain of Varsity Water Polo, 3-Time All-American Athlete</div>
                  <div className="work-company">Phillips Exeter Academy and Greenwich Aquatics</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Exeter, NH and Greenwich, CT • Sep. 2023 – Jun. 2024
                  </div>
                </div>
              </div>
              <div className="text-body mt-2 ml-16">
                <p>• Guided team to a 2nd-place finish in the New England Preparatory School Athletic Council (NEPSAC).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="section">
          <h2 className="text-subheading text-foreground mb-6">TECHNICAL SKILLS</h2>
          
          <div className="text-body space-y-4">
            <p>
              <strong>Languages:</strong> Python, C/C++, Java, Clojure
            </p>
            <p>
              <strong>Frameworks:</strong> React, Node.js, LangChain
            </p>
            <p>
              <strong>Developer Tools:</strong> Git, Cursor, VS Code, Visual Studio
            </p>
            <p>
              <strong>Libraries:</strong> Pytorch, pandas, NumPy, Matplotlib, scikit-learn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
