'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function Portfolio() {
  const sections = ['skills', 'experience', 'projects', 'education'];

  return (
    <div className="scroll-smooth bg-gray-50 min-h-screen font-sans text-gray-800">
      <nav className="sticky top-0 bg-white shadow-sm z-10">
        <ul className="max-w-3xl mx-auto flex justify-center space-x-6 py-4">
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className="text-gray-600 hover:text-gray-900 px-2 py-1 rounded focus:outline-none focus:ring"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <header className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-5xl font-extrabold mb-2">Ian Jeffers</h1>
        <p className="text-sm text-gray-600">
          <a href="mailto:IanJeffers99@gmail.com" className="underline">
            IanJeffers99@gmail.com
          </a>{' '}
          ·{' '}
          <a
            href="https://www.linkedin.com/in/ian-jeffers-847588193/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>{' '}
          ·{' '}
          <a href="https://github.com/ianjeffers" className="underline" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </header>

      <main className="max-w-3xl mx-auto p-6 grid gap-8">
        <section id="skills" aria-labelledby="skills-heading">
          <Card>
            <CardContent>
              <h2 id="skills-heading" className="text-2xl font-semibold mb-4">
                Skills
              </h2>
              <ul className="flex flex-wrap gap-2 text-sm">
                {[
                  'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'GraphQL', 'Spring', 'Node.js/Express',
                  'Docker', 'Kubernetes', 'Redis', 'Prometheus', 'AWS', 'Azure', 'React', 'Maven', 'Kafka',
                  'Jest/Mocha', 'Mockito', 'JUnit', 'CI/CD', 'Helm', 'Terraform'
                ].map((skill) => (
                  <li key={skill} className="px-3 py-1 bg-white rounded-full shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="experience" aria-labelledby="experience-heading">
          <Card>
            <CardContent>
              <h2 id="experience-heading" className="text-2xl font-semibold mb-4">
                Experience
              </h2>
              {[
                {
                  title: 'Senior Software Engineer',
                  company: 'Walmart Global Tech',
                  location: 'San Jose, CA',
                  date: 'Aug 2023 – Present',
                  points: [
                    'Led 6 engineers to build Spark Driver identity verification systems for 1.6M+ active drivers',
                    'Scaled backend infra supporting 1.1+ deliveries/sec across millions of annual orders',
                    'Saved $10K/mo by modernizing legacy infrastructure and reducing incidents 40% YoY',
                    'Managed deployments & monitoring with internal IaC tooling (Kitt) on Cloud Native Platform',
                    'Replaced Azure Media Services, driving $4M/yr in revenue by eliminating third-party costs'
                  ]
                },
                {
                  title: 'Software Development Engineer Intern',
                  company: 'Amazon Web Services',
                  location: 'Arlington, VA',
                  date: 'Jun 2022 – Sep 2022',
                  points: [
                    'Designed a build shadowing service handling 100K+ daily builds to enhance migration reliability',
                    'Built CI/CD pipelines and CloudWatch monitoring, boosting system reliability and dev velocity',
                    'Contributed to cloud-native tooling adoption across the Builder Tools organization'
                  ]
                },
                {
                  title: 'Lead Software Engineer Intern',
                  company: 'PairAnything',
                  location: 'San Diego, CA',
                  date: 'Oct 2021 – Apr 2022',
                  points: [
                    'Led intern team in building backend features with Node.js/Express and managed agile sprints',
                    'Developed Yelp-based pairing recommendations via scraping and API integration',
                    'Enhanced API reliability by patching auth vulnerabilities and collaborating with global teams'
                  ]
                },
                {
                  title: 'Software Engineering Intern',
                  company: 'ObjectSecurity',
                  location: 'Remote',
                  date: 'Internship Date',
                  points: [
                    'Implemented offline speech-to-text transcription for sensitive meeting summaries',
                    'Compared transcription accuracy using ML metrics and multiple engine evaluations',
                    'Built a Bootstrap frontend for user interaction and presentation of results'
                  ]
                }
              ].map((exp) => (
                <article key={exp.title} className="mb-6">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-sm italic mb-2">
                    {exp.company} &middot; {exp.location} &middot; {exp.date}
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="projects" aria-labelledby="projects-heading">
          <Card>
            <CardContent>
              <h2 id="projects-heading" className="text-2xl font-semibold mb-4">
                Projects
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>HealthMS</strong> – MHacks 15 "Best Medical Hack"<br />
                  NLP-powered health journaling for MS symptom tracking (Flask, Python, MongoDB, Azure, React)
                </li>
                <li>
                  <strong>Project Nebula</strong><br />
                  Distributed, gig-based E-Waste collection platform with environmental impact tracking
                </li>
                <li>
                  <strong>GitHub Contexts Plugin</strong><br />
                  ChatGPT plugin for navigable GitHub repo search and context-aware code assistance
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="education" aria-labelledby="education-heading">
          <Card>
            <CardContent>
              <h2 id="education-heading" className="text-2xl font-semibold mb-4">
                Education
              </h2>
              <p className="text-lg font-medium">University of California, San Diego</p>
              <p className="text-sm italic">
                B.S. Cognitive Science, Specialization in Machine Learning & Neural Computation &middot; Mar 2023
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">
        <p>&copy; {new Date().getFullYear()} Ian Jeffers</p>
      </footer>
    </div>
  );
}
