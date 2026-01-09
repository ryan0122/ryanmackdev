import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="hero-section" className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
              RYAN MACK
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Senior UI Engineer & Accessibility SME
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-400">
              Denver, Colorado, USA
            </p>
          </div>
        </section>

        {/* About/Expertise Section */}
        <section id="expertise" className="py-20 px-6 bg-gray-50 dark:bg-[#161616]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">About</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300">
              Certified <span className="font-semibold text-gray-900 dark:text-white">IAAP Web Accessibility Specialist (WAS)</span> and <span className="font-semibold text-gray-900 dark:text-white">DHS Trusted Tester</span> with <span className="font-semibold text-gray-900 dark:text-white">20+ years</span> of enterprise web development experience and <span className="font-semibold text-gray-900 dark:text-white">8+ years</span> specializing in React, TypeScript, Redux, and Angular. 
              Expert in building accessible, high-performance applications compliant with WCAG 2.1/2.2 and Section 508 standards. 
              Proven technical leader with enterprise-level Scrum Master experience, skilled in mentoring developers, driving cross-functional collaboration, and architecting scalable design systems.
            </p>
            
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Frontend Technologies</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>React / TypeScript</li>
                  <li>Angular / Vue</li>
                  <li>Redux / State Management</li>
                  <li>Web Components (Lit)</li>
                  <li>HTML5 / CSS3 / SASS</li>
                  <li>Tailwind / Material-UI</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Accessibility Expertise</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>WCAG 2.0/2.1/2.2 (A/AA/AAA)</li>
                  <li>Section 508 / ADA Compliance</li>
                  <li>JAWS / NVDA / VoiceOver</li>
                  <li>axe DevTools / WAVE / ANDI</li>
                  <li>VPAT / ACR Documentation</li>
                  <li>Audit & Remediation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Development Tools</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Git / CI/CD / Jenkins</li>
                  <li>Webpack / Vite</li>
                  <li>Jest / Cypress / Testing</li>
                  <li>Storybook / Chromatic</li>
                  <li>Node.js / Express</li>
                  <li>RESTful APIs / GraphQL</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="A11yPros"
                description="MarketingWebsite for Accessibility consulting services."
                link="https://a11ypros.com"
              />
              <ProjectCard 
                title="AI JSX Accessibility Audit Tool"
                description="AI-powered code auditing tool for accessibility issues."
                link="https://ui.a11ypros.com/audit"
              />
              <ProjectCard 
                title="Accessible React Components"
                description="Library of reusable, accessible React components."
                link="https://github.com/ryan0122/a11ypros-components"
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-[#161616]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Experience</h2>
            
            <div className="space-y-12">
              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-8">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold">Senior Developer and Accessibility Expert</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Clover</p>
                  <p className="text-gray-600 dark:text-gray-400">Oct 2021 - Present • Remote</p>
                </div>
                <ul className="text-lg text-gray-700 dark:text-gray-300 mb-4 space-y-2 list-disc list-inside">
                  <li>Spearheaded comprehensive WCAG 2.1 A/AA accessibility auditing across multiple enterprise web applications</li>
                  <li>Architected and delivered a fully WCAG compliant, reusable React/TypeScript component library</li>
                  <li>Established cross-organizational accessibility documentation and implementation strategies</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">WCAG 2.1</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Storybook</span>
                </div>
              </div>

              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-8">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold">Senior Accessibility Specialist</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">North Dakota Legislative Branch</p>
                  <p className="text-gray-600 dark:text-gray-400">Oct 2024 - Dec 2024 • Remote</p>
                </div>
                <ul className="text-lg text-gray-700 dark:text-gray-300 mb-4 space-y-2 list-disc list-inside">
                  <li>Conducted comprehensive WCAG 2.2 AA conformance audit of public-facing websites and digital assets</li>
                  <li>Authored complete VPAT 2.4 / INT edition and ACR for Section 508 compliance reporting</li>
                  <li>Developed detailed technical remediation recommendations and governance strategies</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">WCAG 2.2</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">VPAT</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Section 508</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">JAWS/NVDA</span>
                </div>
              </div>

              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-8">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold">Senior Developer and Accessibility Expert</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Texas Southern University</p>
                  <p className="text-gray-600 dark:text-gray-400">Sept 2020 - Oct 2021 • Remote</p>
                </div>
                <ul className="text-lg text-gray-700 dark:text-gray-300 mb-4 space-y-2 list-disc list-inside">
                  <li>Conducted comprehensive WCAG 2.1 A/AA accessibility audits with detailed Jira documentation</li>
                  <li>Executed code remediation implementing semantic HTML, ARIA, and keyboard patterns</li>
                  <li>Authored organization-wide accessibility documentation and best practices</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">WCAG Audits</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">ARIA</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Jira</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">ADA</span>
                </div>
              </div>

              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-8">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold">Senior Developer and Accessibility Expert</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Tenon</p>
                  <p className="text-gray-600 dark:text-gray-400">May 2019 - Sept 2020 • Remote</p>
                </div>
                <ul className="text-lg text-gray-700 dark:text-gray-300 mb-4 space-y-2 list-disc list-inside">
                  <li>Architected advanced JavaScript-based accessibility scanning and remediation tools</li>
                  <li>Lead Developer of defect tracking application (React, Node.js, MongoDB)</li>
                  <li>Created server-side rendering for accessibility reports with D3.js visualizations</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">D3.js</span>
                </div>
              </div>

              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-8">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold">Senior UI Engineer</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Blndspt</p>
                  <p className="text-gray-600 dark:text-gray-400">Dec 2017 - Mar 2019 • Denver, CO</p>
                </div>
                <ul className="text-lg text-gray-700 dark:text-gray-300 mb-4 space-y-2 list-disc list-inside">
                  <li>Led front-end development of multi-platform check-in applications for airline and cruise industries</li>
                  <li>Developed interactive SVG animations to enhance usability</li>
                  <li>Performed accessibility testing across devices achieving WCAG 2.1 AA compliance</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">SVG</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Testing</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">WCAG 2.1</span>
                </div>
              </div>

              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-8">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold">Senior UI Engineer</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Pacific Metrics</p>
                  <p className="text-gray-600 dark:text-gray-400">Mar 2015 - Aug 2017 • Denver, CO</p>
                </div>
                <ul className="text-lg text-gray-700 dark:text-gray-300 mb-4 space-y-2 list-disc list-inside">
                  <li>Led frontend development for enterprise-scale student testing applications</li>
                  <li>Collaborated on RESTful API design using RAML documentation</li>
                  <li>Served as ScrumMaster facilitating Agile best practices</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">REST APIs</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Jenkins</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Scrum</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Professional Certifications</h2>
            
            <div className="space-y-6">
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">
                  <a href="https://www.credly.com/badges/bd860613-65b2-48bf-9150-b3dd9788934d/public_url" 
                     className="hover:underline focus-visible:outline-[#149eca]"
                     target="_blank"
                     rel="noopener noreferrer">
                    IAAP Web Accessibility Specialist (WAS)
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  International Association of Accessibility Professionals
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Issued: September 2025 • Certification Number: JAWAS12669
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">
                  Trusted Tester for Web
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  US Department of Homeland Security (DHS)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Issued: July 2025 • Certification Number: TT-2507-07629
                </p>
              </div>

              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">
                  Certified ScrumMaster (CSM)
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Scrum Alliance
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  2010 - 2013 (Inactive)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-[#161616]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Interested in collaborating or need accessibility expertise for your project?
            </p>
            <a 
              href="mailto:ryan.mack1200@gmail.com" 
              className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:opacity-90 transition-opacity focus-visible:outline-[#149eca]"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}