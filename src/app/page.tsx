import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto p-6">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Ryan Mack</h1>
          <h2 className="text-xl mb-6">Senior Frontend Engineer and Accessibility SME</h2>
          <p className="text-lg leading-relaxed">Results-driven Frontend Engineer with 20+ years of experience specializing in accessibility implementation and WCAG compliance. Expert in creating high-performance, accessible web applications using modern JavaScript frameworks. Proven track record of leading accessibility remediation initiatives, developing component libraries, and mentoring development teams in accessibility best practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard 
              title="A11yPros"
              description="Website for Accessibility consulting services."
              technologies={['Next.js', 'Tailwind CSS']}
              link="https://a11ypros.com"
            />
            <ProjectCard 
              title="Accessibility Audit: XYZ App"
              description="Performed a full WCAG audit for a major SaaS platform."
              link="https://github.com/yourusername/project1"
            />
            <ProjectCard 
              title="Accessible React Components"
              description="Built a library of reusable, accessible React components."
              link="https://github.com/yourusername/project2"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}