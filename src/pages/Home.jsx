import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Objectives from '../components/Objectives';
import Leadership from '../components/Leadership';
import Activities from '../components/Activities';
import Gallery from '../components/Gallery';
import Announcements from '../components/Announcements';
import MembershipCTA from '../components/MembershipCTA';
import ComplaintCTA from '../components/ComplaintCTA';
import Contact from '../components/Contact';

export default function Home() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Objectives />
      <Leadership />
      <Activities />
      <Gallery />
      <Announcements />
      <MembershipCTA />
      <ComplaintCTA />
      <Contact />
    </main>
  );
}

